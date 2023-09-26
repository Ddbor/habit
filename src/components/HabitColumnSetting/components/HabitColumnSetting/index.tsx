import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import './index.css';
import { Button, Drawer, Input, Space, theme } from 'antd';
import { ColumnSettingSortable } from '../ColumnSettingSortable';
import {
  HabitColumnSettingProps,
  HabitColumnsType,
  StorageColumnsType,
} from '../../typing';
import { CheckboxGroup } from '../CheckboxGroup';
import { habitColumnsCopy, habitSortColumns } from '../../utils';
import { CloseCircleFilled } from '@ant-design/icons';

const { Search } = Input;
const { useToken } = theme;

export const HabitColumnSetting: React.FC<HabitColumnSettingProps> = ({
  columns,
  open,
  max,
  min = 1,
  onOk,
  persistenceKey,
  persistenceType,
  extraContent,
  ...rest
}) => {
  const { onClose } = rest;
  // 当前右侧列表
  const [sortItems, setSortItems] = useState<HabitColumnsType[]>([]);
  // 当前选择项列表
  const [checkItems, setCheckItems] = useState<HabitColumnsType[]>([]);
  // 搜索选项
  const [filterTitle, setFilterTitle] = useState<string>('');
  // 存储每次columns变化后的数据
  const saveColumns = useRef<HabitColumnsType[]>([]);
  // 是否应该进行初次进入的操作，默认为true
  const [isInit, setIsInit] = useState(true);
  const noStorage = useMemo(
    () => !persistenceKey || !persistenceType || typeof window === 'undefined',
    [persistenceKey, persistenceType],
  );
  const { token } = useToken();
  const [showCountError, setShowCountError] = useState(false);

  // 使用本地持久存储中的数据设置columns
  const genColumnsByStorage = useCallback(
    (data: HabitColumnsType[]) => {
      if (noStorage) {
        return data;
      }
      const storage = window[persistenceType!];
      try {
        const storageString = storage?.getItem(persistenceKey!);
        if (storageString) {
          const storageData: StorageColumnsType = JSON.parse(storageString);
          const habitColumns = habitColumnsCopy(data);
          habitColumns.forEach((item) => {
            item.show = storageData?.[item.key]?.show ?? item.show;
            item.order = storageData?.[item.key]?.order ?? item.order;
          });
          return habitColumns;
        }
      } catch (error) {
        console.warn(error);
      }

      return data;
    },
    [persistenceKey, persistenceType, noStorage],
  );

  // 设置本地存储
  const setStorageByColumns = useCallback(
    (data: HabitColumnsType[]) => {
      if (noStorage) {
        return;
      }
      const storage = window[persistenceType!];
      try {
        const storageData = data.reduce((obj: StorageColumnsType, item) => {
          obj[item.key] = {
            show: item.show,
            order: item.order,
          };
          return obj;
        }, {});
        storage?.setItem(persistenceKey!, JSON.stringify(storageData));
      } catch (error) {
        console.warn(error);
      }
    },
    [persistenceKey, persistenceType, noStorage],
  );

  const genNewColumns = (
    allColumns: HabitColumnsType[],
    sortColumns: HabitColumnsType[],
  ) => {
    return allColumns.map((item) => {
      const sortInfo = sortColumns.find((v) => v.key === item.key);
      const obj = {
        ...item,
        show: !!sortInfo,
      };

      if (sortInfo) {
        obj.order = sortInfo.order;
      }

      return obj;
    });
  };

  useEffect(() => {
    if (open) {
      let habitColumns = columns;
      saveColumns.current = habitColumns;
      setIsInit(false);
      setSortItems(habitSortColumns(habitColumnsCopy(saveColumns.current)));
      setCheckItems(saveColumns.current);
    }
  }, [open, columns]);

  useEffect(() => {
    // 初次进入并且使用持久化存储，调用一次 onOk
    // 这时应该还没有打开抽屉，但是组件已经挂载
    if (!open && isInit && !noStorage) {
      const habitColumns = genColumnsByStorage(columns);
      setIsInit(false);
      onOk?.(
        genNewColumns(
          habitColumns,
          habitSortColumns(habitColumnsCopy(habitColumns)),
        ),
      );
    }
  }, [isInit, noStorage, open, columns]);

  // 搜索提交
  const handleOnSearch = (value: string) => {
    setFilterTitle(value);
  };

  const handleCheckboxChange = (list: HabitColumnsType[]) => {
    setSortItems(
      habitSortColumns(
        list.map((item) => {
          return {
            ...item,
            order: sortItems.find((v) => v.key === item.key)?.order,
          };
        }),
      ),
    );
    setCheckItems(list);
  };

  // 清空
  const handleClear = () => {
    const newData = habitColumnsCopy(saveColumns.current);
    newData.forEach((item) => {
      if (!item.disable) {
        item.show = false;
        delete item.order;
      }
    });
    setSortItems(habitSortColumns(newData));
    setCheckItems(newData);
  };

  const handleOk = async (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  ) => {
    if (typeof min === 'number' && sortItems.length < min) {
      setShowCountError(true);
      return;
    }
    if (typeof max === 'number' && sortItems.length > max) {
      setShowCountError(true);
      return;
    }
    const newColumns = genNewColumns(saveColumns.current, sortItems);
    setShowCountError(false);
    setStorageByColumns(newColumns);
    if ((await onOk?.(newColumns)) !== false) {
      onClose?.(e);
    }
  };

  return (
    <>
      <Drawer
        title="选择数据字段"
        placement="right"
        width={1000}
        bodyStyle={{
          padding: '16px 24px',
          backgroundColor: '#f9f9f9',
        }}
        footer={
          <Space>
            <Button type="default" onClick={onClose}>
              取消
            </Button>
            <Button type="primary" onClick={handleOk}>
              确定
            </Button>
            {showCountError && (
              <>
                <CloseCircleFilled
                  style={{ color: token.colorError, fontSize: 12 }}
                />
                <span style={{ color: token.colorError, fontSize: 12 }}>
                  请{typeof min === 'number' ? `至少选择 ${min} 个指标` : ''}
                  {typeof min === 'number' && typeof max === 'number' && '，'}
                  {typeof max === 'number' ? `至多选择 ${max} 个指标` : ''}
                </span>
              </>
            )}
          </Space>
        }
        open={open}
        {...rest}
      >
        <div className="habit-column-setting-body">
          <div className="habit-column-setting-left">
            <div className="habit-column-setting-left-head">
              <Search
                placeholder="搜索数据字段"
                allowClear
                style={{ width: 200 }}
                onSearch={handleOnSearch}
              />
            </div>
            <div className="habit-column-setting-left-cont">
              <CheckboxGroup
                max={max}
                sortColumns={sortItems}
                dataSource={checkItems}
                filterTitle={filterTitle}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
          <div className="habit-column-setting-right">
            <div className="habit-column-setting-right-head">
              <span className="habit-column-setting-checkbox-label">
                已选（{sortItems.length}
                {max ? ` / ${max}` : null}）项
              </span>
              <a className="habit-column-setting-right-a" onClick={handleClear}>
                清空
              </a>
              {extraContent}
            </div>
            <div className="habit-column-setting-right-alert">
              拖动以下字段进行排序
            </div>
            <ColumnSettingSortable
              dataSource={sortItems}
              onSortEnd={(data) => setSortItems(habitSortColumns(data))}
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};

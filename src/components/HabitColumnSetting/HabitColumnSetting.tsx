import React, { useEffect, useRef, useState } from 'react';
import './HabitColumnSetting.css';
import { Button, Drawer, Input } from 'antd';
import { ColumnSettingSortable } from './ColumnSettingSortable';
import { HabitColumnSettingProps, HabitColumnsType } from './typing';
import { CheckboxGroup } from './CheckboxGroup';

const { Search } = Input;

const copy = (data: HabitColumnsType[]) => data.map((item) => ({ ...item }));

export const HabitColumnSetting: React.FC<HabitColumnSettingProps> = ({
  columns,
  open,
  onOk,
  ...rest
}) => {
  const { onClose } = rest;
  // 当前右侧列表
  const [sortItems, setSortItems] = useState<HabitColumnsType[]>([]);
  // 当前选择项列表
  const [checkItems, setCheckItems] = useState<HabitColumnsType[]>([]);
  // 搜索选项
  const [filterTitle, setFilterTitle] = useState<string>('');
  // 存储，
  const saveColumns = useRef<HabitColumnsType[]>([]);

  useEffect(() => {
    // 打开时初始化
    if (open) {
      saveColumns.current = copy(columns);
      setSortItems(copy(saveColumns.current));
      setCheckItems(copy(saveColumns.current));
    }
  }, [open, columns]);

  // 搜索提交
  const handleOnSearch = (value: string) => {
    setFilterTitle(value);
  };

  const handleCheckboxChange = (list: HabitColumnsType[]) => {
    setSortItems(list.filter((item) => item.show));
    setCheckItems(list);
  };

  // 恢复默认
  const handleReset = () => {
    setSortItems(copy(saveColumns.current));
    setCheckItems(copy(saveColumns.current));
  };

  const handleOk = (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  ) => {
    const newColumns = saveColumns.current.map((item) => {
      const sortInfo = sortItems.find((v) => v.key === item.key);
      const obj = {
        ...item,
        show: !!sortInfo,
      };

      if (sortInfo) {
        obj.order = sortInfo.order;
      }

      return obj;
    });
    onOk?.(newColumns);
    onClose?.(e);
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
          <div>
            <Button
              type="primary"
              style={{ marginRight: 15 }}
              onClick={handleOk}
            >
              确定
            </Button>
            <Button type="default" onClick={onClose}>
              取消
            </Button>
          </div>
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
                dataSource={checkItems}
                filterTitle={filterTitle}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
          <div className="habit-column-setting-right">
            <div className="habit-column-setting-right-head">
              <span className="habit-column-setting-checkbox-label">
                已选（16项）
              </span>
              <a className="habit-column-setting-right-a">清空</a>
              <a className="habit-column-setting-right-a" onClick={handleReset}>
                恢复默认
              </a>
            </div>
            <div className="habit-column-setting-right-alert">
              拖动以下字段进行排序
            </div>
            <ColumnSettingSortable
              dataSource={sortItems}
              onSortEnd={setSortItems}
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};

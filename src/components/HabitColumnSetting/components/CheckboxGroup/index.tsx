import React, { useEffect, useMemo, useState } from 'react';
import '../HabitColumnSetting/index.css';
import { CheckboxGroupProps, HabitColumnsType } from '../../typing';
import { Checkbox, Popover } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { habitColumnsCopy, sortGroupHabitColumns } from '../../utils';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const questionCircleStyle = {
  color: '#ccc',
  cursor: 'pointer',
  fontSize: '14px',
  marginLeft: '2px',
  verticalAlign: 'middle',
};

const groupChecked = (columns: HabitColumnsType[]) => {
  return columns.every((item) => item.show);
};

const goupIndeterminate = (columns: HabitColumnsType[]) => {
  return columns.some((item) => item.show) && !groupChecked(columns);
};

const handleFilterTitle = (title: React.ReactNode, filterTitle?: string) => {
  if (!filterTitle || typeof title !== 'string') {
    return false;
  }
  return title.includes(filterTitle);
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  dataSource,
  filterTitle,
  max = Infinity,
  sortColumns = [],
  onChange,
}) => {
  const [items, setItems] = useState<
    { columns: HabitColumnsType[]; groupOrder: number; groupName: string }[]
  >([]);
  // 禁用全部可选择项，一般是因为到达最大限度了
  const disableAll = useMemo(
    () => sortColumns.length >= max,
    [max, sortColumns],
  );

  useEffect(() => {
    setItems(sortGroupHabitColumns(habitColumnsCopy(dataSource)));
  }, [dataSource]);

  const genNewDataSource = (
    e: CheckboxChangeEvent,
    columns: HabitColumnsType[],
  ) => {
    const checked = e.target.checked;
    const newDataSource = habitColumnsCopy(dataSource);
    let count = sortColumns.length;
    columns.forEach((item) => {
      if ((checked && count >= max) || item?.disable) {
        return;
      }
      const actionIndex = newDataSource.findIndex(
        (colItem) => colItem.key === item.key,
      );
      newDataSource[actionIndex].show = checked;
      // 不显示了，移除排序字段
      if (!checked) {
        delete newDataSource[actionIndex].order;
      } else {
        count++;
      }
    });
    onChange?.(newDataSource);
  };

  return (
    <>
      {items.map((group, groupIndex) => (
        <div key={groupIndex.toString()}>
          <div className="habit-column-setting-left-cont-title">
            <Checkbox
              indeterminate={goupIndeterminate(group.columns)}
              checked={groupChecked(group.columns)}
              onChange={(e) => genNewDataSource(e, group.columns)}
            >
              <span className="habit-column-setting-checkbox-label">
                {group.groupName}
              </span>
            </Checkbox>
          </div>
          <div className="habit-column-setting-checkbox-list clearfix">
            {group.columns.map((colItem) => (
              <div
                key={colItem.key}
                className={`habit-column-setting-checkbox-item ${
                  handleFilterTitle(colItem.title, filterTitle)
                    ? 'habit-column-setting-checkbox-item-active'
                    : ''
                }`}
              >
                <Checkbox
                  checked={colItem.show}
                  disabled={colItem.disable || (disableAll && !colItem.show)}
                  onChange={(e) => genNewDataSource(e, [colItem])}
                >
                  <span className="habit-column-setting-checkbox-label">
                    {colItem?.title}
                  </span>
                </Checkbox>
                {colItem.description && (
                  <Popover
                    content={colItem.description}
                    overlayInnerStyle={{
                      maxWidth: 200,
                    }}
                  >
                    <QuestionCircleOutlined style={questionCircleStyle} />
                  </Popover>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

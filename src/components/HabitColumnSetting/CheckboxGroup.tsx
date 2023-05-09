import React, { useEffect, useState } from 'react';
import './HabitColumnSetting.css';
import { CheckboxGroupProps, HabitColumnsType } from './typing';
import { Checkbox, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { sortGroupHabitColumns } from './util';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const questionCircleStyle = {
  color: '#ccc',
  cursor: 'pointer',
  fontSize: '14px',
  marginLeft: '2px',
  verticalAlign: 'middle',
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
  onChange,
}) => {
  const [items, setItems] = useState<
    { columns: HabitColumnsType[]; groupOrder: number; groupName: string }[]
  >([]);

  useEffect(() => {
    setItems(sortGroupHabitColumns([...dataSource]));
  }, [dataSource]);

  // 单个选项点击
  const handleItemChecked = (
    e: CheckboxChangeEvent,
    colItem: HabitColumnsType,
  ) => {
    const checked = e.target.checked;
    const newDataSource = [...dataSource];
    const actionIndex = newDataSource.findIndex(
      (item) => item.key === colItem.key,
    );
    newDataSource[actionIndex].show = checked;
    // 不显示了，移除排序字段
    if (!checked) {
      delete newDataSource[actionIndex].order;
    }
    onChange?.(newDataSource);
  };

  return (
    <>
      {items.map((item, groupIndex) => (
        <div key={groupIndex.toString()}>
          <div className="habit-column-setting-left-cont-title">
            <Checkbox>
              <span className="habit-column-setting-checkbox-label">
                {item.groupName}
              </span>
            </Checkbox>
          </div>
          <div className="habit-column-setting-checkbox-list clearfix">
            {item.columns.map((colItem) => (
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
                  disabled={colItem.disable}
                  onChange={(e) => handleItemChecked(e, colItem)}
                >
                  <span className="habit-column-setting-checkbox-label">
                    {colItem?.title}
                  </span>
                </Checkbox>
                {colItem.description && (
                  <Tooltip title={colItem.description}>
                    <QuestionCircleOutlined style={questionCircleStyle} />
                  </Tooltip>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

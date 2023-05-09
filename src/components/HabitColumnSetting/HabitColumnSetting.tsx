import React, { useState } from 'react';
import './HabitColumnSetting.css';
import { Button, Checkbox, Drawer, DrawerProps, Input, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from '@ddbor/habit/utils';
import { useRefFunction } from '@ddbor/habit/hooks';

const { Search } = Input;

const questionCircleStyle = {
  color: '#ccc',
  cursor: 'pointer',
  fontSize: '14px',
  marginLeft: '2px',
  verticalAlign: 'middle',
};

const SortableItemComponent = SortableElement<any>(({ value }: any) => (
  <div className="habit-column-setting-drag-item">{value}</div>
));

const SortableContainerComponent = SortableContainer<any>(
  ({ children }: any) => {
    return <div className="habit-column-setting-drag-box">{children}</div>;
  },
);

export type HabitColumnSettingProps = DrawerProps;

export const HabitColumnSetting: React.FC<HabitColumnSettingProps> = ({
  ...rest
}) => {
  const { onClose } = rest;
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ] as any[]);

  // 搜索提交
  const handleOnSearch = (value: string) => {
    console.log(value);
  };

  // 拖拽排序结束回调事件
  const onSortEnd = useRefFunction(
    ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
      if (oldIndex !== newIndex) {
        const newData = arrayMoveImmutable({
          array: [...items],
          fromIndex: oldIndex,
          toIndex: newIndex,
        });
        setItems([...newData]);
      }
    },
  );

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
              onClick={() => {}}
            >
              确定
            </Button>
            <Button type="default" onClick={onClose}>
              取消
            </Button>
          </div>
        }
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
              <div className="habit-column-setting-left-cont-title">
                <Checkbox>
                  <span className="habit-column-setting-checkbox-label">
                    基础效果
                  </span>
                </Checkbox>
              </div>
              <div className="habit-column-setting-checkbox-list">
                <div className="habit-column-setting-checkbox-item">
                  <Checkbox>
                    <span className="habit-column-setting-checkbox-label">
                      花费
                    </span>
                  </Checkbox>
                  <Tooltip title="所选时间段内，创意在引力魔方资源位上被展现/点击后所消耗的费用。注意：报表显示保留后2位小数点，为便于精确统计，下载报表中的消耗数据将精确到小数点后5位。每日日终实际结算，将保留总消耗数据至小数点后2位（分之后消耗金额会自动舍去），如存在后台报表和实际结算数据不一致，将以财务记录中实际扣款为主。">
                    <QuestionCircleOutlined style={questionCircleStyle} />
                  </Tooltip>
                </div>
                <div className="habit-column-setting-checkbox-item">
                  <Checkbox>
                    <span className="habit-column-setting-checkbox-label">
                      花费
                    </span>
                  </Checkbox>
                  <Tooltip title="所选时间段内，创意在引力魔方资源位上被看到的次数（去除因消费者快速划过、主图未完全展现等情况产生的曝光）。注意：虚假展现会被反作弊体系过滤，该数据为反作弊系统过滤后的数据。">
                    <QuestionCircleOutlined style={questionCircleStyle} />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className="habit-column-setting-right">
            <div className="habit-column-setting-right-head">
              <span className="habit-column-setting-checkbox-label">
                已选（16项）
              </span>
              <a className="habit-column-setting-right-a">清空</a>
              <a className="habit-column-setting-right-a">恢复默认</a>
            </div>
            <div className="habit-column-setting-right-alert">
              拖动以下字段进行排序（从左至右）
            </div>
            <SortableContainerComponent
              lockAxis="y"
              lockToContainerEdges
              onSortEnd={onSortEnd}
            >
              {items.map((value: any, index: number) => (
                <SortableItemComponent
                  key={`item-${value}`}
                  index={index}
                  value={value}
                />
              ))}
            </SortableContainerComponent>
          </div>
        </div>
      </Drawer>
    </>
  );
};

import React, { useEffect, useState } from 'react';
import './HabitColumnSetting.css';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable, useRefFunction } from '@ant-design/pro-components';
import { ColumnSettingSortableProps, HabitColumnsType } from './typing';
import { habitSortColumns } from './util';

const SortableItemComponent = SortableElement<{ value: HabitColumnsType }>(
  ({ value }: { value: HabitColumnsType }) => (
    <div className="habit-column-setting-drag-item">{<>{value?.title}</>}</div>
  ),
);

const SortableContainerComponent = SortableContainer<any>(
  ({ children }: any) => {
    return <div className="habit-column-setting-drag-box">{children}</div>;
  },
);

export const ColumnSettingSortable: React.FC<ColumnSettingSortableProps> = ({
  dataSource,
  onSortEnd,
}) => {
  const [items, setItems] = useState<HabitColumnsType[]>([]);

  // 拖拽排序结束回调事件
  const handleOnSortEnd = useRefFunction(
    ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
      if (oldIndex !== newIndex) {
        const newData: HabitColumnsType[] = arrayMoveImmutable({
          array: [...items],
          fromIndex: oldIndex,
          toIndex: newIndex,
        });
        // 重新排序
        newData.forEach((item, index) => {
          item.order = index;
        });
        onSortEnd?.(newData);
      }
    },
  );

  useEffect(() => {
    setItems(habitSortColumns([...dataSource]));
  }, [dataSource]);

  return (
    <>
      <SortableContainerComponent
        lockAxis="y"
        lockToContainerEdges
        onSortEnd={handleOnSortEnd}
      >
        {items.map((item, index) => (
          <SortableItemComponent key={item.key} index={index} value={item} />
        ))}
      </SortableContainerComponent>
    </>
  );
};

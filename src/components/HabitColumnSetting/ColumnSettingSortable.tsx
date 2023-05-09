import React from 'react';
import './HabitColumnSetting.css';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable, useRefFunction } from '@ant-design/pro-components';
import { ColumnSettingSortableProps, HabitColumnsType } from './typing';
import { habitColumnsCopy } from './util';

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
  // 拖拽排序结束回调事件
  const handleOnSortEnd = useRefFunction(
    ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
      if (oldIndex !== newIndex) {
        const newData: HabitColumnsType[] = arrayMoveImmutable({
          array: habitColumnsCopy(dataSource),
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

  return (
    <>
      <SortableContainerComponent
        lockAxis="y"
        lockToContainerEdges
        onSortEnd={handleOnSortEnd}
      >
        {dataSource.map((item, index) => (
          <SortableItemComponent key={item.key} index={index} value={item} />
        ))}
      </SortableContainerComponent>
    </>
  );
};

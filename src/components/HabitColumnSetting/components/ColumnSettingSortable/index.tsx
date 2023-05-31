import React from 'react';
import '../HabitColumnSetting/index.css';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { useRefFunction } from '@ant-design/pro-components';
import { ColumnSettingSortableProps, HabitColumnsType } from '../../typing';
import { habitColumnsCopy } from '../../utils';
import { arrayMoveImmutable } from '@ddbor/habit';

const SortableItemComponent = SortableElement<{ value: HabitColumnsType }>(
  ({ value }: { value: HabitColumnsType }) => (
    <div
      className="habit-column-setting-drag-item"
      style={{
        backgroundImage:
          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAAt0lEQVR4Ae3BQQ3EMAxE0d8MDRMKEUtGFMlESig0RtoiaA697ntXVU3bzUNSrrVuXlTVtN08JOWw3UAAYbs5sN1AAGG7Bx8NSQlsYEtKDiQlsIEtKfnjqqppu3lIyrXWzYuqmrabh6QcthsIIGw3B7YbCCBs9+CjISmBDWxJyYGkBDawJSV/XFU1bTcPSbnWunlRVdN285CUw3YDAYTt5sB2AwGE7R58NCQlsIEtKTmQlMAGtqT8AT13ZKKS1qIVAAAAAElFTkSuQmCC")',
      }}
    >
      {<>{value?.title}</>}
    </div>
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

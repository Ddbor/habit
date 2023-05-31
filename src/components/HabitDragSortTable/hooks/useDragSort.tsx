import { useRefFunction } from '@ant-design/pro-components';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  closestCenter,
  DndContext,
  MouseSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { TableComponents } from 'rc-table/lib/interface';
import React, { createContext, useContext } from 'react';
import { defaultSort, treeKeys, treeSort } from '../utils';
import { deepFindItem } from '@ddbor/habit';

const SortableItemContextValue = createContext<{
  handle: React.ReactNode;
}>({ handle: null });

/**
 * 拖拽排序表格的行，
 * 如果有 DragHandle 会给 dragSortKey 所在的行注入 provide 和 handle
 * 如果没有整个行都支持拖拽
 * @param props
 * @returns
 */
const SortableRow = (props: any) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...props?.style,
  };
  const { DragHandle, dragSortKey, ...rest } = props;

  if (dragSortKey) {
    const doms: React.ReactNode[] = [];
    React.Children.forEach(rest.children, (child: any, index) => {
      if (child.key === dragSortKey) {
        doms.push(
          <SortableItemContextValue.Provider
            key={child.key || index}
            value={{
              handle: (
                <DragHandle
                  rowdata={child?.props?.record}
                  index={child?.props?.index}
                  {...listeners}
                  {...attributes}
                />
              ),
            }}
          >
            {child}
          </SortableItemContextValue.Provider>,
        );
        return;
      }
      doms.push(child);
    });
    return (
      <tr {...rest} ref={setNodeRef} style={style}>
        {doms}
      </tr>
    );
  }

  return (
    <tr
      {...rest}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    />
  );
};

/**
 * 拖拽排序表格的 cell，用与判断要不要展示 handle
 */
const SortableItemCell = React.memo((props: any) => {
  const { ...rest } = props;
  const { handle } = useContext(SortableItemContextValue);
  if (handle) {
    return (
      <td {...rest}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {handle} {rest.children}
        </div>
      </td>
    );
  }

  return <td {...rest} />;
});

export interface UseDragSortOptions<T> {
  dataSource?: T[];
  onDragSortEnd?: (newDataSource: T[]) => Promise<void> | void;
  dragSortKey?: string;
  components?: TableComponents<T>;
  rowKey: any;
  DragHandle: React.FC<any>;
  treeSort: boolean;
  childrenColumnName: string;
  treeKeyName: string;
}

const SortContainer = (p: any) => <tbody {...p} />;

export function useDragSort<T>(props: UseDragSortOptions<T>) {
  const {
    dataSource = [],
    onDragSortEnd,
    DragHandle,
    dragSortKey,
    treeSort: treeSortStatue,
    childrenColumnName,
    treeKeyName,
  } = props;

  const sensors = useSensors(useSensor(PointerSensor), useSensor(MouseSensor));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over?.id?.toString() || active.id === over?.id) {
      return;
    }
    console.log(event);
    if (!treeSortStatue) {
      onDragSortEnd?.(defaultSort(dataSource, active, over));
    } else {
      onDragSortEnd?.(treeSort(dataSource, active, over, childrenColumnName));
    }
  }

  const DraggableContainer = useRefFunction((p: any) => {
    // const itemsIndex = dataSource.map(
    //   (item: any, index) => item?.key ?? index?.toString(),
    // );
    // treeKeys 会将树形所有项目设置为可拖动
    return (
      <SortableContext
        items={treeKeys(dataSource, childrenColumnName, treeKeyName)}
        strategy={verticalListSortingStrategy}
      >
        <SortContainer {...p} />
      </SortableContext>
    );
  });

  const DraggableBodyRow = useRefFunction((p: any) => {
    const { ...restProps } = p;
    // 函数 findIndex 基于 Table rowKey props 并且应该始终是正确的数组索引
    // let index = '-1';
    // if (sortType === 'default') {
    //   index = dataSource
    //     .findIndex(
    //       (item: any) =>
    //         item[props.rowKey ?? 'index'] === restProps['data-row-key'],
    //     )
    //     ?.toString();
    // }
    const currentData: any = deepFindItem(
      dataSource,
      childrenColumnName,
      (item: any) =>
        item[props.rowKey ?? 'index'] === restProps['data-row-key'],
    );

    return (
      <SortableRow
        id={currentData[treeKeyName]}
        dragSortKey={dragSortKey}
        DragHandle={DragHandle}
        key={currentData[props.rowKey ?? 'index']}
        {...restProps}
      />
    );
  });

  const components: TableComponents<T> = props.components || {};

  if (dragSortKey) {
    components.body = {
      ...(props.components?.body || {}),
      wrapper: DraggableContainer,
      row: DraggableBodyRow,
      cell: SortableItemCell,
    };
  }

  return {
    DndContext: (contextProps: any) => {
      return (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          {contextProps.children}
        </DndContext>
      );
    },
    components,
  };
}

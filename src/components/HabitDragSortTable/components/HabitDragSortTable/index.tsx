import React, { useMemo } from 'react';
import {
  ParamsType,
  ProTable,
  ProTableProps,
} from '@ant-design/pro-components';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import { useDragSort } from '../../hooks/useDragSort';
import { HolderOutlined } from '@ant-design/icons';
import './index.css';

export type HabitDragTableProps<T, U> = {
  /** 是否支持树形排序 */
  treeSort?: boolean;
  /** 树形结构标识名称，用于拖拽时使用，默认为 treeKey */
  treeKeyName?: string;
  /** 拖动排序列key值 如配置此参数，则会在该 key 对应的行显示拖拽排序把手，允许拖拽排序 */
  dragSortKey?: string;
  /** 渲染自定义拖动排序把手的函数 如配置了 dragSortKey 但未配置此参数，则使用默认把手图标 */
  dragSortHandlerRender?: (rowdata: T, idx: number) => React.ReactNode;
  /** 拖动排序完成回调 */
  onDragSortEnd?: (newDataSource: T[]) => Promise<void> | void;
} & ProTableProps<T, U>;

export const HabitDragSortTable: React.FC = <
  T extends Record<string, any>,
  U extends ParamsType = ParamsType,
  ValueType = 'text',
>(
  props: HabitDragTableProps<T, U>,
) => {
  const {
    dataSource: originDataSource,
    defaultData,
    onDataSourceChange,
    onLoad,
    rowKey,
    dragSortKey,
    onDragSortEnd,
    dragSortHandlerRender,
    treeSort = false,
    childrenColumnName = 'children',
    treeKeyName = 'treeKey',
    ...otherProps
  } = props;

  const [dataSource, setDataSource] = useMergedState<T[]>(
    () => defaultData || [],
    {
      value: originDataSource as T[],
      onChange: onDataSourceChange,
    },
  );

  const wrapOnload = async (ds: T[]) => {
    setDataSource(ds);
    return onLoad?.(ds);
  };

  // 默认拖拽把手
  const DragHandle = useMemo(() => {
    return (dragHandleProps: any) => {
      const { ...rest } = dragHandleProps;
      const defaultDom = (
        <HolderOutlined {...rest} className="habit-drag-sort-table-icon" />
      );

      const handel = dragSortHandlerRender
        ? dragSortHandlerRender(
            dragHandleProps?.rowdata,
            dragHandleProps?.index,
          )
        : defaultDom;
      return <>{handel}</>;
    };
  }, []);

  // 使用自定义hooks获取拖拽相关组件的components集合
  const { components, DndContext } = useDragSort<T>({
    dataSource: dataSource?.slice(),
    dragSortKey,
    onDragSortEnd,
    components: props.components,
    rowKey,
    DragHandle,
    treeSort,
    childrenColumnName,
    treeKeyName,
  });

  return (
    <>
      <ProTable<T, U, ValueType>
        {...(otherProps as ProTableProps<T, U, ValueType>)}
        columns={otherProps.columns?.map((item): any => {
          if (item.dataIndex === dragSortKey || item.key === dragSortKey) {
            if (!item.render) {
              item.render = () => null;
            }
          }
          return item;
        })}
        rowKey={rowKey}
        onLoad={wrapOnload}
        dataSource={dataSource}
        onDataSourceChange={onDataSourceChange}
        components={components}
        tableViewRender={(_, defaultDom) => {
          return <DndContext>{defaultDom}</DndContext>;
        }}
      />
    </>
  );
};

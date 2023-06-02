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
import { setTreeKey } from '../../utils';

export type HabitDragTableProps<T, U> = {
  /**
   * default：默认排序
   * treeSort：树形排序，同一个父元素相同等级之间的移动
   * groupSort：跨组排序，同等级元素之间的移动，开启此选项会默认开启 treeSort
   * freeSort：自由排序，无视元素层级，开启此选项会自带 treeSort groupSort
   */
  sortType?: 'default' | 'treeSort' | 'groupSort' | 'freeSort';

  /** 树形结构标识名称，用于拖拽时使用，默认为 treeKey */
  treeKeyName?: string;
  /** 拖动排序列key值 如配置此参数，则会在该 key 对应的行显示拖拽排序把手，允许拖拽排序 */
  dragSortKey?: string;
  /** 渲染自定义拖动排序把手的函数 如配置了 dragSortKey 但未配置此参数，则使用默认把手图标 */
  dragSortHandlerRender?: (
    rowdata: T,
    idx: number,
    props: any,
  ) => React.ReactNode;
  /**
   * 拖动排序完成回调
   * @param newDataSource 新数据
   * @param status 数据是否被移动了，如果没有进行排序会返回false
   */
  onDragSortEnd?: (newDataSource: T[], status: boolean) => Promise<void> | void;
} & ProTableProps<T, U>;

export const HabitDragSortTable = <
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
    sortType = 'default',
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
            rest,
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
    sortType,
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
        dataSource={setTreeKey(dataSource)}
        onDataSourceChange={onDataSourceChange}
        components={components}
        tableViewRender={(_, defaultDom) => {
          return <DndContext>{defaultDom}</DndContext>;
        }}
      />
    </>
  );
};

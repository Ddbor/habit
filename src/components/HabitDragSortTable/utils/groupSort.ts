import type { Active, Over } from '@dnd-kit/core';
import { treeSort } from './treeSort';
import { freeMove } from './freeMove';

/**
 * 跨组排序方式，不支持自由升降级
 * @param dataSource
 * @param active
 * @param over
 * @param childName
 * @returns
 */
export const groupSort = <T>(
  data: T[],
  active: Active,
  over: Over,
  childName: string,
): { data: T[]; status: boolean } => {
  const treeSortInfo = treeSort(data, active, over, childName);

  if (treeSortInfo.status) {
    return treeSortInfo;
  }

  /** 如果树形不能解决，那就使用接下来的跨组逻辑 */

  const dataSource = [...data];

  const [fromLevel, toLevel] = [active.id, over.id].map((item) =>
    item.toString().split('-'),
  );

  // 首先不同等级的元素不能排序
  if (fromLevel.length !== toLevel.length) {
    return { data: dataSource, status: false };
  }

  return {
    data: freeMove(dataSource, fromLevel, toLevel, childName),
    status: true,
  };
};

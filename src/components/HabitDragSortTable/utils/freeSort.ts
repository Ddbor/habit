import type { Active, Over } from '@dnd-kit/core';
import { treeSort } from './treeSort';
import { freeMove } from './freeMove';

/**
 * 自由排序方式
 * @param dataSource
 * @param active
 * @param over
 * @param childName
 * @returns
 */
export const freeSort = <T>(
  dataSource: T[],
  active: Active,
  over: Over,
  childName: string,
): { data: T[]; status: boolean } => {
  const treeSortInfo = treeSort(dataSource, active, over, childName);

  if (treeSortInfo.status) {
    return treeSortInfo;
  }

  const groupSortInfo = treeSort(dataSource, active, over, childName);

  if (groupSortInfo.status) {
    return groupSortInfo;
  }

  /** 如果树形和跨组还不满足，在执行下面的逻辑 */

  const [fromLevel, toLevel] = [active.id, over.id].map((item) =>
    item.toString().split('-'),
  );

  return {
    data: freeMove(dataSource, fromLevel, toLevel, childName),
    status: true,
  };
};

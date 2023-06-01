import { arrayMoveImmutable } from '@ddbor/habit';
import type { Active, Over } from '@dnd-kit/core';
import { levelDataSource } from './levelDataSource';

/**
 * 树形排序方式，同等级子项排序，不支持跨组，不支持自由升降级
 * @param dataSource
 * @param active
 * @param over
 * @param childName
 * @returns
 */
export const treeSort = <T>(
  dataSource: T[],
  active: Active,
  over: Over,
  childName: string,
): { data: T[]; status: boolean } => {
  const [fromLevel, toLevel] = [active.id, over.id].map((item) =>
    item.toString().split('-'),
  );

  // 获取到自身level，并且移除数组中最后一项
  const lastFromLevel = fromLevel.pop() as string;
  const lastToLevel = toLevel.pop() as string;

  // level深度一样，并且除最后一级，其余level必须是同等级，并且得有第二层，否则就是默认排序
  if (
    fromLevel.length !== toLevel.length ||
    !fromLevel.length ||
    fromLevel.join(',') !== toLevel.join(',')
  ) {
    return { data: dataSource, status: false };
  }

  // 是哪个父元素
  const parent: any = levelDataSource(fromLevel, dataSource, childName);

  // 移动这个父元素的子项
  parent[childName] = arrayMoveImmutable<T>({
    array: (parent as any)[childName],
    fromIndex: parseInt(lastFromLevel),
    toIndex: parseInt(lastToLevel),
  });

  return { data: dataSource, status: true };
};

import { arrayMoveImmutable } from '@ddbor/habit';
import type { Active, Over } from '@dnd-kit/core';
import { defaultSort } from './defaultSort';

/**
 * 树形排序方式，不支持跨组，不支持自由升降级
 * 同等级子项排序
 * @param dataSource
 * @param active
 * @param over
 * @returns
 */
export const treeSort = <T>(
  dataSource: T[],
  active: Active,
  over: Over,
  childName: string,
) => {
  // 首先得具备基础功能呀
  const newData = defaultSort(dataSource, active, over);

  const [fromLevel, toLevel] = [active.id, over.id].map((item) =>
    item.toString().split('-'),
  );

  // 必须是同一个父元素并且同等级
  if (fromLevel[0] !== toLevel[0] || fromLevel.length !== toLevel.length) {
    return newData;
  }

  // 是哪个父元素
  const parent: any = fromLevel
    .slice(0, fromLevel.length - 1)
    .reduce((obj: any, level) => {
      if (Array.isArray(obj[childName])) {
        return obj[childName][Number(level)];
      }
      return obj;
    }, newData);

  arrayMoveImmutable<T>({
    array: (parent as any)[childName],
    fromIndex: parseInt(fromLevel[length - 1] as string),
    toIndex: parseInt(toLevel[length - 1] as string),
  });

  return newData;
};

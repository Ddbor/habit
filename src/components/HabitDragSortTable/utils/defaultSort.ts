import { arrayMoveImmutable } from '@ddbor/habit';
import type { Active, Over } from '@dnd-kit/core';

/**
 * 默认排序方式，不支持树形，不支持跨组，不支持自由升降级
 * @param dataSource
 * @param active
 * @param over
 * @returns
 */
export const defaultSort = <T>(
  dataSource: T[],
  active: Active,
  over: Over,
): { data: T[]; status: boolean } => {
  const [fromLevel, toLevel] = [active.id, over.id].map((item) =>
    item.toString().split('-'),
  );
  // 最顶级 length = 1
  if (fromLevel.length === toLevel.length && fromLevel.length === 1) {
    const newData = arrayMoveImmutable<T>({
      array: dataSource,
      fromIndex: parseInt(fromLevel[0] as string),
      toIndex: parseInt(toLevel[0] as string),
    });

    return { data: newData, status: true };
  }

  return { data: dataSource, status: false };
};

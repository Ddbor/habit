import type { Active, Over } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

/**
 * 默认排序方式，不支持树形，不支持跨组，不支持自由升降级
 * @param dataSource
 * @param active
 * @param over
 * @returns
 */
export const defaultSort = <T>(dataSource: T[], active: Active, over: Over) => {
  const [fromLevel, toLevel] = [active.id, over.id].map((item) =>
    item.toString().split('-'),
  );
  // 最顶级 length = 1
  if (fromLevel.length === toLevel.length && fromLevel.length === 1) {
    const newData = arrayMove<T>(
      dataSource || [],
      parseInt(active.id as string),
      parseInt(over.id as string),
    );

    return newData;
  }

  return dataSource;
};

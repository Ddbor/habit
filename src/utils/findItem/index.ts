/**
 * 递归查找数组中符合条件的项目
 * @param arr 要查找的数组
 * @param childKey 子项key
 * @param predicate 条件
 * @returns 符合条件的项目
 */
export const deepFindItem = <T>(
  arr: T[],
  childName: string,
  predicate: (value: T, index: number, obj: T[]) => boolean,
): T | null => {
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (predicate(item, i, arr)) {
      return item;
    }
    const children = (item as any)[childName];
    if (Array.isArray(children)) {
      const childRes = deepFindItem(children, childName, predicate);
      if (childRes) {
        return childRes;
      }
    }
  }

  return null;
};

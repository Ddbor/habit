/**
 * 获取树形列表key数组
 * @param data
 * @param childKey
 * @param keys
 * @returns
 */
export const treeKeys = <T>(
  data: T[],
  childName: string = 'children',
  keyName: string = 'treeKey',
  keys: string[] = [],
): string[] => {
  data.forEach((item: any) => {
    if (item[keyName]) {
      keys.push(item[keyName]);
    }
    if (Array.isArray(item[childName])) {
      treeKeys(item[childName], childName, keyName, keys);
    }
  });

  return keys;
};

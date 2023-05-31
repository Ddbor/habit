/**
 * 递归树形设置key
 * @param arr 要遍历的数组
 * @param childKey 子项键名
 * @param keyName key键名
 * @returns
 * @example
 * 

  const data = [
    {
      name: 'A',
      children: [
        { name: 'A-1', children: [] },
        { name: 'A-2', children: [] },
      ],
    },
    {
      name: 'B',
      children: [
        { name: 'B-1', children: [] },
        {
          name: 'B-2',
          children: [
            { name: 'B-2-1', children: [] },
            { name: 'B-2-2', children: [] },
          ],
        },
      ],
    },
  ];

  const newData = treeIndex(data, 'children');

  newData = [
    {
      name: 'A',
      children: [
        { name: 'A-1', children: [], key: '0-1' },
        { name: 'A-2', children: [], key: '0-1' },
      ],
      key: '0',
    },
    {
      name: 'B',
      children: [
        { name: 'B-1', children: [], key: '1-0' },
        {
          name: 'B-2',
          children: [
            { name: 'B-2-1', children: [], key: '1-1-0' },
            { name: 'B-2-2', children: [], key: '1-1-1' },
          ],
          key: '1-1',
        },
      ],
      key: '1',
    },
  ];


 */
export const setTreeKey = <T>(
  data: T[],
  childName: string = 'children',
  keyName: string = 'treeKey',
): T[] => {
  const traverse = (node: any, index: number, parentKey?: string) => {
    const key =
      parentKey !== undefined ? `${parentKey}-${index}` : String(index);

    node[keyName] = key;

    const children = node[childName];
    if (Array.isArray(children)) {
      node[childName].forEach((child: any, childIndex: number) => {
        traverse(child, childIndex, key);
      });
    }
  };

  data.forEach((node, index) => {
    traverse(node, index);
  });

  return data;
};

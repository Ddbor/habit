import { HabitColumnsType, HabitGroupColumnsType } from './typing';

/**
 * 对表格列进行分组
 * @param columns
 * @returns
 */
export const groupHabitColumns = (
  columns: HabitColumnsType[],
): { [key: string]: HabitGroupColumnsType } => {
  return columns.reduce((acc: { [key: string]: any }, curr) => {
    const groupName = curr.properties.groupName;
    const groupOrder = curr.properties.groupOrder;

    if (!acc[groupName]) {
      acc[groupName] = {
        groupName,
        groupOrder,
        columns: [],
      };
    }

    acc[groupName].columns.push(curr);

    return acc;
  }, {});
};

/**
 * 对分组后的数据进行排序
 * @param columns
 * @returns
 */
export const sortGroupHabitColumns = (
  columns: HabitColumnsType[],
): HabitGroupColumnsType[] => {
  return Object.values(groupHabitColumns(columns)).sort(
    (a, b) => a.groupOrder - b.groupOrder,
  );
};

const getOrderValue = (item: HabitColumnsType) => {
  if (typeof item.order === 'number') {
    return item.order;
  }
  return Infinity;
};

/**
 * 获取排序后展示在页面上的字段列表
 * @param columns
 * @returns
 */
export const habitSortColumns = (columns: HabitColumnsType[]) => {
  return columns
    .filter((item) => item.show)
    .sort((a, b) => getOrderValue(a) - getOrderValue(b));
};

// 只做 HabitColumnsType 的简单copy
export const habitColumnsCopy = (
  data: HabitColumnsType[],
): HabitColumnsType[] => {
  return data.map((item) => ({ ...item }));
};

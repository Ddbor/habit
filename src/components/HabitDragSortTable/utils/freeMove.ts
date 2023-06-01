import { levelDataSource } from './levelDataSource';

type MoveDerection = 'down' | 'up';

/** 移动方向判断 */
const moveDirection = (
  fromLevelArr: string[],
  toLevelArr: string[],
): MoveDerection => {
  let isUp = false;

  for (let index = 0; index < fromLevelArr.length; index++) {
    const fromLevel = fromLevelArr[index];
    const toLevel = toLevelArr[index];
    if (fromLevel === toLevel) {
      continue;
    }
    if (typeof toLevel === 'undefined' || fromLevel > toLevel) {
      isUp = true;
      break;
    } else {
      isUp = false;
      break;
    }
  }

  return isUp ? 'up' : 'down';
};

/**
 * 根据fromLevelArr移除数据源中的项目
 * @param fromLevelArr
 */
const removeItem = <T>(
  dataSource: T[],
  fromLevelArr: string[],
  childName: string,
) => {
  const newFromArr = [...fromLevelArr];
  // 获取到自身level，并且移除数组中最后一项
  const lastFromLevel = parseInt(newFromArr.pop() as string);

  if (!newFromArr.length) {
    // 被移出最后一项后是否还有下一等级
    // 如果没有，那么父元素就是dataSource本身
    // 移除父元素中被移动的元素
    dataSource.splice(lastFromLevel, 1);
  } else {
    // 被移动元素的父元素
    const activeParent: any = levelDataSource(
      newFromArr,
      dataSource,
      childName,
    );
    // 移除父元素中被移动的元素
    activeParent[childName].splice(lastFromLevel, 1);
  }
};

const insertItem = <T>(
  dataSource: T[],
  toLevelArr: string[],
  childName: string,
  activeItem: T,
  direction: MoveDerection,
) => {
  const newToArr = [...toLevelArr];
  // 获取到自身level，并且移除数组中最后一项
  let lastToLevel = parseInt(newToArr.pop() as string);

  // 向下移动
  if (direction === 'down') {
    lastToLevel += 1;
  }

  // 再将被移动元素放置在新的位置上
  if (!newToArr.length) {
    // 被移出最后一项后是否还有下一等级
    // 如果没有，那么父元素就是dataSource本身
    // 移除父元素中被移动的元素，替换为新元素
    dataSource.splice(lastToLevel, 0, activeItem);
  } else {
    // 移动到父元素
    const overParent: any = levelDataSource(newToArr, dataSource, childName);
    // 替换
    overParent[childName].splice(lastToLevel, 0, activeItem);
  }
};

/**
 * 逻辑是
 * 1. 删除掉拖拽的项目
 * 2. 将拖拽的项目插入到放置的位置上
 *
 * 问题：由下向上没有问题，但是由上向下就有问题，因为先删除了元素，导致后面插入的时候位置不正确，甚至会报错，找不到正确的父元素
 * 解决：
 * 1. 向下移动，先删，再次放置元素没有问题
 * 2. 向上移动，先放置元素，再删没有问题
 */
export const freeMove = <T>(
  data: T[],
  fromLevelArr: string[],
  toLevelArr: string[],
  childName: string,
) => {
  const dataSource = [...data];

  // 找到被移动的元素
  const activeItem: any = levelDataSource(fromLevelArr, data, childName);

  const direction = moveDirection(fromLevelArr, toLevelArr);

  if (direction === 'up') {
    // 向上移动
    removeItem(dataSource, fromLevelArr, childName);
    insertItem(dataSource, toLevelArr, childName, activeItem, direction);
  } else {
    // 向下移动
    insertItem(dataSource, toLevelArr, childName, activeItem, direction);
    removeItem(dataSource, fromLevelArr, childName);
  }

  return dataSource;
};

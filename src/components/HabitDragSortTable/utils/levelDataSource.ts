export const levelDataSource = <T>(
  levelArr: string[],
  dataSource: T[],
  childName: string,
): T => {
  return levelArr.reduce((obj: any, level) => {
    if (Array.isArray(obj)) {
      return obj[Number(level)];
    }
    return obj[childName][Number(level)];
  }, dataSource);
};

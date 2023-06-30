import { ProColumns } from '@ant-design/pro-components';
import { DrawerProps } from 'antd';
import { ColumnGroupType, ColumnType } from 'antd/es/table';

export type ColumnsPropertiesType = {
  /** 分组排序 */
  groupOrder: number;
  /** 分组名称 */
  groupName: string;
  /** 数值的前缀 */
  prefix?: string;
  /** 数值的后缀 */
  suffix?: string;
  /**
   * 格式化的类型
   * 有：
   * formatInt：保留整数位
   * formatFloat：保留两位小数点，如果想要保留多位小数点，可以在后面加上数字，例如：formatFloat2
   * formatPer：保留百分比，默认保留两位小数点，如果想要保留多位小数点，可以在后面加上数字，例如：formatPer2
   */
  formater?: string;
};

export type ColumnsCustomType = {
  /** 是否展示列，默认展示 */
  show: boolean;
  /** 列设置中 disabled 的状态 */
  disable?: boolean;
  /** 列头显示文字 */
  title: React.ReactNode;
  /** React 需要的 key */
  key: string;
  properties: ColumnsPropertiesType;
  /** 列描述 */
  description?: string;
  /** 排序 */
  order?: number;
  [key: string]: any;
};

export type HabitColumnsType<T = any, ValueType = 'text'> = (
  | ColumnGroupType<T>
  | ColumnType<T>
  | ProColumns<T, ValueType>
) &
  ColumnsCustomType;

export type HabitColumnSettingProps = DrawerProps & {
  /** 列配置 */
  columns: HabitColumnsType[];
  /**
   * 持久化的类型，支持 localStorage 和 sessionStorage
   *
   * @param localStorage 设置在关闭浏览器后也是存在的
   * @param sessionStorage 关闭浏览器后会丢失
   */
  persistenceType?: 'localStorage' | 'sessionStorage';
  /** 持久化的key，用于存储到 storage 中 */
  persistenceKey?: string;
  /** 最大值，不传则不限制 */
  max?: number;
  /** 最小值 */
  min?: number;
  /** 提交回调 */
  onOk?: (
    newColumns: HabitColumnsType[],
  ) => Promise<any> | boolean | undefined | void;
  /** 右侧头部额外内容 */
  extraContent?: React.ReactNode;
};

export type ColumnSettingSortableProps = {
  dataSource: HabitColumnsType[]; // 表格列配置
  onSortEnd?: (data: HabitColumnsType[]) => void;
};

export type CheckboxGroupProps = {
  max?: number; // 最大值，不传则不限制
  sortColumns?: HabitColumnsType[]; // 是否排序
  dataSource: HabitColumnsType[]; // 表格列配置
  filterTitle?: string; // 过滤标题
  onChange?: (data: HabitColumnsType[]) => void; // 选择回调
};

export type StorageColumnsType = {
  [key: string]: { show: boolean; order?: number };
};

export type HabitGroupColumnsType = {
  groupOrder: number;
  groupName: string;
  columns: HabitColumnsType[];
};

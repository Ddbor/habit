import { ProColumns } from '@ant-design/pro-components';
import { DrawerProps } from 'antd';
import { ColumnsType } from 'antd/es/table';

export type ColumnsPropertiesType = {
  groupOrder: number; // 分组排序
  groupName: string; // 分组名称
  unit?: string; // 单位
  /**
   * 格式化的类型
   * 有：
   * formatFloat：保留小数点后几位
   * formatInt：保留整数位
   * formatPer：保留百分比
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
  description?: string; // 列描述
  order?: number; // 排序
  [key: string]: any;
};

export type HabitColumnsType = (ColumnsType | ProColumns) & ColumnsCustomType;

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
  max?: number; // 最大值，不传则不限制
  onOk?: (newColumns: HabitColumnsType[]) => void;
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

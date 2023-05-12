---
nav: 组件
group:
  order: 1
order: 1
---

# 列筛选

## 基本使用

```tsx
import {
  HabitColumnSetting,
  habitSortColumns,
  HabitColumnsType,
} from '@ddbor/habit';
import { useState, useMemo } from 'react';
import { Button, Col, Row, Statistic } from 'antd';

const data: HabitColumnsType[] = [
  {
    title: '数据一',
    key: '1',
    description: '这是数据一',
    disable: true,
    show: true,
    value: 4132,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
  },
  {
    title: '数据二',
    key: '2',
    show: true,
    value: 546245,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
  },
  {
    title: '数据三',
    key: '3',
    description: '这是数据三',
    show: true,
    value: 1431,
    properties: {
      groupOrder: 2,
      groupName: '其他信息',
    },
  },
  {
    title: '数据四',
    key: '4',
    description: '这是数据四',
    show: true,
    value: 62143,
    properties: {
      groupOrder: 2,
      groupName: '其他信息',
    },
  },
  {
    title: '数据五',
    key: '5',
    show: true,
    value: 12347,
    properties: {
      groupOrder: 2,
      groupName: '其他信息',
    },
  },
];

export default () => {
  const [visible, setVisible] = useState(false);
  // 数据源
  const [columns, setColumns] = useState(data);
  // 展示的字段
  const showList = useMemo(() => habitSortColumns(columns), [columns]);

  return (
    <>
      <Button onClick={() => setVisible(true)} style={{ marginBottom: 20 }}>
        打开列筛选
      </Button>
      <HabitColumnSetting
        open={visible}
        onClose={() => setVisible(false)}
        columns={columns}
        onOk={(newColumns) => {
          setColumns(newColumns);
        }}
      />
      <Row gutter={[24, 24]}>
        {showList.map((item) => (
          <Col span={8} key={item.key}>
            <Statistic title={item.title} value={item.value} />
          </Col>
        ))}
      </Row>
    </>
  );
};
```

## 分组展示

```tsx
import {
  HabitColumnSetting,
  habitSortColumns,
  sortGroupHabitColumns,
  HabitColumnsType,
} from '@ddbor/habit';
import { useState, useMemo } from 'react';
import { Button, Col, Row, Statistic } from 'antd';

const data: HabitColumnsType[] = [
  {
    title: '数据一',
    key: '1',
    description: '这是数据一',
    disable: true,
    show: true,
    value: 4132,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
  },
  {
    title: '数据二',
    key: '2',
    show: true,
    value: 546245,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
  },
  {
    title: '数据三',
    key: '3',
    description: '这是数据三',
    show: true,
    value: 1431,
    properties: {
      groupOrder: 2,
      groupName: '其他信息',
    },
  },
  {
    title: '数据四',
    key: '4',
    description: '这是数据四',
    show: true,
    value: 62143,
    properties: {
      groupOrder: 2,
      groupName: '其他信息',
    },
  },
  {
    title: '数据五',
    key: '5',
    show: true,
    value: 12347,
    properties: {
      groupOrder: 2,
      groupName: '其他信息',
    },
  },
];

export default () => {
  const [visible, setVisible] = useState(false);
  // 数据源
  const [columns, setColumns] = useState(data);
  // 分组展示的字段
  const showGroupList = useMemo(
    () => sortGroupHabitColumns(habitSortColumns(columns)),
    [columns],
  );

  return (
    <>
      <Button onClick={() => setVisible(true)} style={{ marginBottom: 20 }}>
        打开列筛选
      </Button>
      <HabitColumnSetting
        open={visible}
        onClose={() => setVisible(false)}
        columns={columns}
        onOk={(newColumns) => {
          setColumns(newColumns);
        }}
      />
      {showGroupList.map((group, index) => (
        <div key={index.toString()}>
          <h4 style={{ padding: '24px 0', color: '#666' }}>
            {group.groupName}
          </h4>
          <Row gutter={[24, 24]}>
            {group.columns.map((item) => (
              <Col span={8} key={item.key}>
                <Statistic title={item.title} value={item.value} />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
};
```

## 最大值

```tsx
import {
  HabitColumnSetting,
  habitSortColumns,
  HabitColumnsType,
} from '@ddbor/habit';
import { useState, useMemo } from 'react';
import { Button, Col, Row, Statistic } from 'antd';

const data: HabitColumnsType[] = [
  {
    title: '数据一',
    key: '1',
    description: '这是数据一',
    disable: true,
    show: true,
    value: 4132,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
  },
  {
    title: '数据二',
    key: '2',
    show: true,
    value: 546245,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
  },
  {
    title: '数据三',
    key: '3',
    description: '这是数据三',
    value: 1431,
    properties: {
      groupOrder: 2,
      groupName: '其他信息',
    },
  },
  {
    title: '数据四',
    key: '4',
    description: '这是数据四',
    show: true,
    value: 62143,
    properties: {
      groupOrder: 2,
      groupName: '其他信息',
    },
  },
  {
    title: '数据五',
    key: '5',
    value: 12347,
    properties: {
      groupOrder: 2,
      groupName: '其他信息',
    },
  },
];

export default () => {
  const [visible, setVisible] = useState(false);
  // 数据源
  const [columns, setColumns] = useState(data);
  // 展示的字段
  const showList = useMemo(() => habitSortColumns(columns), [columns]);

  return (
    <>
      <Button onClick={() => setVisible(true)} style={{ marginBottom: 20 }}>
        打开列筛选
      </Button>
      <HabitColumnSetting
        open={visible}
        onClose={() => setVisible(false)}
        max={3}
        columns={columns}
        onOk={(newColumns) => {
          setColumns(newColumns);
        }}
      />
      <Row gutter={[24, 24]}>
        {showList.map((item) => (
          <Col span={8} key={item.key}>
            <Statistic title={item.title} value={item.value} />
          </Col>
        ))}
      </Row>
    </>
  );
};
```

## 持久化存储

```tsx
import {
  HabitColumnSetting,
  habitSortColumns,
  HabitColumnsType,
} from '@ddbor/habit';
import { useState, useMemo } from 'react';
import { Button, Col, Row, Statistic } from 'antd';

const data: HabitColumnsType[] = [
  {
    title: '数据一',
    key: '1',
    description: '这是数据一',
    disable: true,
    show: true,
    value: 4132,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
  },
  {
    title: '数据二',
    key: '2',
    show: true,
    value: 546245,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
  },
  {
    title: '数据三',
    key: '3',
    description: '这是数据三',
    show: true,
    value: 1431,
    properties: {
      groupOrder: 2,
      groupName: '其他信息',
    },
  },
  {
    title: '数据四',
    key: '4',
    description: '这是数据四',
    show: true,
    value: 62143,
    properties: {
      groupOrder: 2,
      groupName: '其他信息',
    },
  },
  {
    title: '数据五',
    key: '5',
    show: true,
    value: 12347,
    properties: {
      groupOrder: 2,
      groupName: '其他信息',
    },
  },
];

export default () => {
  const [visible, setVisible] = useState(false);
  // 数据源
  const [columns, setColumns] = useState(data);
  // 展示的字段
  const showList = useMemo(() => habitSortColumns(columns), [columns]);

  return (
    <>
      <Button onClick={() => setVisible(true)} style={{ marginBottom: 20 }}>
        打开列筛选
      </Button>
      <HabitColumnSetting
        open={visible}
        persistenceKey="habit-column-setting-sessionStorage-demo"
        persistenceType="sessionStorage"
        onClose={() => setVisible(false)}
        columns={columns}
        onOk={(newColumns) => {
          setColumns(newColumns);
        }}
      />
      <Row gutter={[24, 24]}>
        {showList.map((item) => (
          <Col span={8} key={item.key}>
            <Statistic title={item.title} value={item.value} />
          </Col>
        ))}
      </Row>
    </>
  );
};
```

## 与 [Ant Design Table](https://ant-design.antgroup.com/components/table-cn) 一起使用

```tsx
import React, { useState, useMemo } from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SettingOutlined } from '@ant-design/icons';
import { HabitColumnSetting, habitSortColumns } from '@ddbor/habit';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const listOfColumns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    show: true,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    show: true,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    show: true,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    show: true,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    disable: true,
    show: true,
    properties: {
      groupOrder: 2,
      groupName: '操作',
    },
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [columns, setColumns] = useState(listOfColumns);
  const showColumns = useMemo(() => habitSortColumns(columns), [columns]);

  return (
    <>
      <Button
        style={{ marginBottom: '24px' }}
        type="default"
        icon={<SettingOutlined />}
        onClick={() => setVisible(true)}
      />
      <HabitColumnSetting
        open={visible}
        onClose={() => setVisible(false)}
        columns={columns}
        onOk={(newColumns) => {
          setColumns(newColumns);
        }}
      />
      <Table columns={showColumns} dataSource={data} />
    </>
  );
};

export default App;
```

## 与 [ProComponents Table](https://procomponents.ant.design/components/table) 一起使用

```tsx
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useState, useMemo } from 'react';
import { HabitColumnSetting, habitSortColumns } from '@ddbor/habit';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}

const listOfColumns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    key: 'name',
    show: true,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    key: 'containers',
    show: true,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    initialValue: 'all',
    show: true,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '创建时间',
    tooltip: '这是一段描述',
    key: 'since',
    show: true,
    properties: {
      groupOrder: 1,
      groupName: '基本信息',
    },
    hideInSearch: true,
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
  },
];

export default () => {
  const [visible, setVisible] = useState(false);
  const [columns, setColumns] = useState(listOfColumns);
  const showColumns = useMemo(() => habitSortColumns(columns), [columns]);

  return (
    <>
      <HabitColumnSetting
        open={visible}
        onClose={() => setVisible(false)}
        columns={columns}
        onOk={(newColumns) => {
          setColumns(newColumns);
        }}
      />
      <ProTable<TableListItem>
        columns={showColumns}
        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          return Promise.resolve({
            data: tableListDataSource,
            success: true,
          });
        }}
        rowKey="key"
        pagination={{
          showQuickJumper: true,
        }}
        search={{
          optionRender: false,
          collapsed: false,
        }}
        dateFormatter="string"
        headerTitle="表格标题"
        toolbar={{
          settings: [<SettingOutlined onClick={() => setVisible(true)} />],
        }}
        toolBarRender={() => [
          <Button key="show">查看日志</Button>,
          <Button key="out">
            导出数据
            <DownOutlined />
          </Button>,
          <Button type="primary" key="primary">
            创建应用
          </Button>,
        ]}
      />
    </>
  );
};
```

## API

| 参数              | 说明                                              | 类型                                                                      | 默认值 |
| ----------------- | ------------------------------------------------- | ------------------------------------------------------------------------- | ------ |
| `columns`         | 列配置                                            | [HabitColumnsType](/components/habit-column-setting#habitcolumnstype)`[]` | -      |
| `persistenceType` | 持久化的类型，支持 localStorage 和 sessionStorage | `'localStorage' \| 'sessionStorage'`                                      | -      |
| `persistenceKey`  | 持久化的 key，用于存储到 storage 中               | `string`                                                                  | -      |
| `max`             | 最大值，不传则不限制                              | `number`                                                                  | -      |
| `onOk`            | 点击确定，或者使用持久化存储时组件挂载时触发      | `(newColumns: HabitColumnsType[]) => void`                                | -      |

### ColumnsPropertiesType

```tsx | pure
export type ColumnsPropertiesType = {
  groupOrder: number; // 分组排序
  groupName: string; // 分组名称
  prefix?: string; // 设置数值的前缀
  suffix?: string; // 设置数值的后缀
  /**
   * 格式化的类型
   * 有：
   * formatInt：保留整数位
   * formatFloat：保留两位小数点，如果想要保留多位小数点，可以在后面加上数字，例如：formatFloat2
   * formatPer：保留百分比，默认保留两位小数点，如果想要保留多位小数点，可以在后面加上数字，例如：formatPer2
   */
  formater?: string;
};
```

### ColumnsCustomType

```tsx | pure
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
```

### HabitColumnsType

[ColumnsType](https://ant-design.antgroup.com/components/table-cn#column)
[ProColumns](https://procomponents.ant.design/components/table#columns-%E5%88%97%E5%AE%9A%E4%B9%89)

```tsx | pure
export type HabitColumnsType<T = any, ValueType = 'text'> = (
  | ColumnGroupType<T>
  | ColumnType<T>
  | ProColumns<T, ValueType>
) &
  ColumnsCustomType;
```

### HabitGroupColumnsType

```tsx | pure
export type HabitGroupColumnsType = {
  groupOrder: number;
  groupName: string;
  columns: HabitColumnsType[];
};
```

## Method

### groupHabitColumns

```tsx | pure
/**
 * 对表格列进行分组
 * @param columns
 * @returns
 */
export const groupHabitColumns = (columns: HabitColumnsType[]) => {};
```

### sortGroupHabitColumns

```tsx | pure
/**
 * 对分组后的数据进行排序
 * @param columns
 * @returns
 */
export const sortGroupHabitColumns = (columns: HabitColumnsType[]) => {};
```

### habitSortColumns

```tsx | pure
/**
 * 获取排序后展示在页面上的字段列表
 * @param columns
 * @returns
 */
export const habitSortColumns = (columns: HabitColumnsType[]) => {};
```

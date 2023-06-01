---
nav: 组件
group:
  order: 3
order: 3
---

# 拖动排序表格

基于 [ProTable](https://procomponents.ant.design/components/table) 二次封装， ProTable 功能都支持

## 基本使用

```tsx
import { HabitDragSortTable } from '@ddbor/habit';
import type { ProColumns } from '@ant-design/pro-components';
import { message } from 'antd';
import { useState } from 'react';

const columns: ProColumns[] = [
  {
    title: '排序',
    dataIndex: 'sort',
    width: 60,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: 11,
    name: 'John Brown',
    age: 42,
    address: 'New York No. 2 Lake Park',
  },
  {
    key: 22,
    name: 'John Brown Bro',
    age: 12,
    address: 'New York No. 3 Lake Park',
  },
  {
    key: 221,
    name: 'John Brown sr.22',
    age: 60,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: 2211,
    name: 'John Brown22',
    age: 42,
    address: 'New York No. 2 Lake Park',
  },
  {
    key: 2222,
    name: 'John Brown Bro22',
    age: 12,
    address: 'New York No. 3 Lake Park',
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];

export default () => {
  const [dataSource, setDataSource] = useState(data);

  const handleDragSortEnd = (newDataSource, status) => {
    // console.log('排序后的数据', newDataSource);
    setDataSource(newDataSource);
  };

  return (
    <>
      <HabitDragSortTable
        options={false}
        search={false}
        columns={columns}
        rowKey="key"
        pagination={false}
        dataSource={dataSource}
        dragSortKey="sort"
        onDragSortEnd={handleDragSortEnd}
      />
    </>
  );
};
```

## 树形表格

树形排序，同一个父元素相同等级之间的移动

```tsx
import { HabitDragSortTable } from '@ddbor/habit';
import type { ProColumns } from '@ant-design/pro-components';
import { message } from 'antd';
import { useState } from 'react';

const columns: ProColumns[] = [
  {
    title: '排序',
    dataIndex: 'sort',
    width: 60,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 22,
        name: 'John Brown Bro',
        age: 12,
        address: 'New York No. 3 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 221,
    name: 'John Brown sr.22',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 2211,
        name: 'John Brown22',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 2222,
        name: 'John Brown Bro22',
        age: 12,
        address: 'New York No. 3 Lake Park',
      },
      {
        key: 2212,
        name: 'John Brown jr.22',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 22121,
            name: 'Jimmy Brown22',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 2213,
        name: 'Jim Green sr.22',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 22131,
            name: 'Jim Green22',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 221311,
                name: 'Jim Green jr.22',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 221312,
                name: 'Jimmy Green sr.22',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];

export default () => {
  const [dataSource, setDataSource] = useState(data);

  const handleDragSortEnd = (newDataSource, status) => {
    // console.log('排序后的数据', newDataSource);
    setDataSource(newDataSource);
    if (status) {
      message.success('修改列表排序成功');
    } else {
      message.error('修改列表排序失败');
    }
  };

  return (
    <>
      <HabitDragSortTable
        sortType="treeSort"
        options={false}
        search={false}
        columns={columns}
        rowKey="key"
        pagination={false}
        dataSource={dataSource}
        dragSortKey="sort"
        onDragSortEnd={handleDragSortEnd}
      />
    </>
  );
};
```

## 跨组排序

跨组排序，同等级元素之间的移动，开启此选项会默认开启 `treeSort`

```tsx
import { HabitDragSortTable } from '@ddbor/habit';
import type { ProColumns } from '@ant-design/pro-components';
import { message } from 'antd';
import { useState } from 'react';

const columns: ProColumns[] = [
  {
    title: '排序',
    dataIndex: 'sort',
    width: 60,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 22,
        name: 'John Brown Bro',
        age: 12,
        address: 'New York No. 3 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 221,
    name: 'John Brown sr.22',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 2211,
        name: 'John Brown22',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 2222,
        name: 'John Brown Bro22',
        age: 12,
        address: 'New York No. 3 Lake Park',
      },
      {
        key: 2212,
        name: 'John Brown jr.22',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 22121,
            name: 'Jimmy Brown22',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 2213,
        name: 'Jim Green sr.22',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 22131,
            name: 'Jim Green22',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 221311,
                name: 'Jim Green jr.22',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 221312,
                name: 'Jimmy Green sr.22',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];

export default () => {
  const [dataSource, setDataSource] = useState(data);

  const handleDragSortEnd = (newDataSource, status) => {
    // console.log('排序后的数据', newDataSource);
    setDataSource(newDataSource);
    if (status) {
      message.success('修改列表排序成功');
    } else {
      message.error('修改列表排序失败');
    }
  };

  return (
    <>
      <HabitDragSortTable
        sortType="groupSort"
        options={false}
        search={false}
        columns={columns}
        rowKey="key"
        pagination={false}
        dataSource={dataSource}
        dragSortKey="sort"
        onDragSortEnd={handleDragSortEnd}
      />
    </>
  );
};
```

## 自由排序

自由排序，无视元素层级，开启此选项会自带 `treeSort` `groupSort`

```tsx
import { HabitDragSortTable } from '@ddbor/habit';
import type { ProColumns } from '@ant-design/pro-components';
import { message } from 'antd';
import { useState } from 'react';

const columns: ProColumns[] = [
  {
    title: '排序',
    dataIndex: 'sort',
    width: 60,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 22,
        name: 'John Brown Bro',
        age: 12,
        address: 'New York No. 3 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 221,
    name: 'John Brown sr.22',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 2211,
        name: 'John Brown22',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 2222,
        name: 'John Brown Bro22',
        age: 12,
        address: 'New York No. 3 Lake Park',
      },
      {
        key: 2212,
        name: 'John Brown jr.22',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 22121,
            name: 'Jimmy Brown22',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 2213,
        name: 'Jim Green sr.22',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 22131,
            name: 'Jim Green22',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 221311,
                name: 'Jim Green jr.22',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 221312,
                name: 'Jimmy Green sr.22',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];

export default () => {
  const [dataSource, setDataSource] = useState(data);

  const handleDragSortEnd = (newDataSource, status) => {
    // console.log('排序后的数据', newDataSource);
    setDataSource(newDataSource);
    if (status) {
      message.success('修改列表排序成功');
    } else {
      message.error('修改列表排序失败');
    }
  };

  return (
    <>
      <HabitDragSortTable
        sortType="freeSort"
        options={false}
        search={false}
        columns={columns}
        rowKey="key"
        pagination={false}
        dataSource={dataSource}
        dragSortKey="sort"
        onDragSortEnd={handleDragSortEnd}
      />
    </>
  );
};
```

## 自定义把手

```tsx
import { HabitDragSortTable } from '@ddbor/habit';
import type { ProColumns } from '@ant-design/pro-components';
import { message } from 'antd';
import { useState } from 'react';
import { HolderOutlined } from '@ant-design/icons';

const columns: ProColumns[] = [
  {
    title: '排序',
    dataIndex: 'sort',
    width: 60,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: 11,
    name: 'John Brown',
    age: 42,
    address: 'New York No. 2 Lake Park',
  },
  {
    key: 22,
    name: 'John Brown Bro',
    age: 12,
    address: 'New York No. 3 Lake Park',
  },
  {
    key: 221,
    name: 'John Brown sr.22',
    age: 60,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: 2211,
    name: 'John Brown22',
    age: 42,
    address: 'New York No. 2 Lake Park',
  },
  {
    key: 2222,
    name: 'John Brown Bro22',
    age: 12,
    address: 'New York No. 3 Lake Park',
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];

const disableSortKey = [2211, 221];

export default () => {
  const [dataSource, setDataSource] = useState(data);

  const handleDragSortEnd = (newDataSource, status) => {
    // console.log('排序后的数据', newDataSource);
    setDataSource(newDataSource);
  };

  return (
    <>
      <HabitDragSortTable
        options={false}
        search={false}
        columns={columns}
        rowKey="key"
        pagination={false}
        dataSource={dataSource}
        dragSortKey="sort"
        onDragSortEnd={handleDragSortEnd}
        dragSortHandlerRender={(rowdata, idx, props) => {
          /** 为null时没有把手，就不能拖动 */
          return disableSortKey.includes(rowdata.key) ? null : (
            <HolderOutlined className="habit-drag-sort-table-icon" {...props} />
          );
        }}
      />
    </>
  );
};
```

## API

| 参数                    | 说明                                                                                 | 类型                                                                                                  | 默认值      |
| ----------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | ----------- |
| `sortType`              | 排序类型                                                                             | `'default' \| 'treeSort' \| 'groupSort' \| 'freeSort'`                                                | `'default'` |
| `treeKeyName`           | 树形结构标识名称，用于拖拽时使用                                                     | `string`                                                                                              | `'treeKey'` |
| `dragSortKey`           | 拖动排序列 key 值，如配置此参数，则会在该 key 对应的行显示拖拽排序把手，允许拖拽排序 | `string`                                                                                              | -           |
| `dragSortHandlerRender` | 渲染自定义拖动排序把手的函数,如配置了 dragSortKey 但未配置此参数，则使用默认把手图标 | `(rowdata: T,idx: number,props: any) => React.ReactNode`                                              | -           |
| `searchProps`           | 搜索框属性                                                                           | [SearchProps](https://ant-design.antgroup.com/components/input-cn#components-input-demo-search-input) | -           |
| `onDragSortEnd`         | 拖动排序完成回调                                                                     | `(newDataSource: T[], status: boolean) => Promise<void> \| void`                                      | -           |

### sortType

1. default：默认排序
2. treeSort：树形排序，同一个父元素相同等级之间的移动
3. groupSort：跨组排序，同等级元素之间的移动，开启此选项会默认开启 `treeSort`
4. freeSort：自由排序，无视元素层级，开启此选项会自带 `treeSort` `groupSort`

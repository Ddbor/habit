---
nav: 组件
group:
  order: 1
order: 1
---

# 列筛选

## 基本使用

```tsx
import { HabitColumnSetting, habitSortColumns } from '@ddbor/habit';
import { useState, useMemo } from 'react';
import { Button, Col, Row, Statistic } from 'antd';
import type { TableColumnType } from 'antd';

const data: TableColumnType<any>[] = [
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
} from '@ddbor/habit';
import { useState, useMemo } from 'react';
import { Button, Col, Row, Statistic } from 'antd';
import type { TableColumnType } from 'antd';

const data: TableColumnType<any>[] = [
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

## API

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |

更多属性参考[Drawer 抽屉 API](https://ant-design.antgroup.com/components/drawer-cn#api)

---
nav: 组件
group:
  order: 1
order: 1
---

# 列筛选

## 基本使用

```tsx
import { HabitColumnSetting } from '@ddbor/habit';
import { useState } from 'react';
import { Button } from 'antd';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>打开列筛选</Button>
      <HabitColumnSetting open={visible} onClose={() => setVisible(false)} />
    </>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |

更多属性参考[Drawer 抽屉 API](https://ant-design.antgroup.com/components/drawer-cn#api)

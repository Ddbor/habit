---
nav: 组件
group:
  order: 2
order: 3
---

# 下拉多选

## 基本使用

```tsx
import { HabitMultipleSelect } from '@ddbor/habit';
import { useState } from 'react';

const items = [
  {
    value: 1,
    label: '选项1',
  },
  {
    value: 2,
    label: '选项2',
  },
  {
    value: 3,
    label: '选项3',
  },
  {
    value: 4,
    label: '选项4',
  },
];

export default () => {
  const [value, setValue] = useState([]);

  return (
    <>
      <HabitMultipleSelect
        buttonText="自定义选择"
        options={items}
        value={value}
        onChange={setValue}
      />
    </>
  );
};
```

## API

| 参数           | 说明                     | 类型                                                                                                  | 默认值 |
| -------------- | ------------------------ | ----------------------------------------------------------------------------------------------------- | ------ |
| `value`        | 选择的值                 | `(string \| number)[]`                                                                                | -      |
| `options`      | 选项                     | [Checkbox Group Options](https://ant-design.antgroup.com/components/checkbox-cn#option)               | -      |
| `popoverProps` | 气泡卡片属性             | [PopoverProps](https://ant-design.antgroup.com/components/popover-cn#api)                             | -      |
| `buttonProps`  | button 属性              | [ButtonProps](https://ant-design.antgroup.com/components/button-cn#api)                               | -      |
| `searchProps`  | 搜索框属性               | [SearchProps](https://ant-design.antgroup.com/components/input-cn#components-input-demo-search-input) | -      |
| `buttonText`   | button 文字              | `React.ReactNode`                                                                                     | -      |
| `onChange`     | value 变化或者清空时触发 | `(value: CheckboxValueType[]) => void`                                                                | -      |

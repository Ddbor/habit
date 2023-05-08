---
nav: 组件
group:
  order: 0
order: 0
---

# 日期选择-范围选择器

## 基本使用

最简单的用法，在浮层中可以选择或者输入日期。

```tsx
import { HabitRangePicker } from '@ddbor/habit';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export default () => {
  const [value, setValue] = useState([dayjs(new Date()), dayjs(new Date())]);

  return (
    <HabitRangePicker
      value={value}
      onChange={(dates, dateString) => {
        setValue(dates);
      }}
    />
  );
};
```

## 预设范围

可以预设常用的日期范围以提高用户体验。

```tsx
import { HabitRangePicker } from '@ddbor/habit';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

type RangePreset = {
  label: string;
  value: [Dayjs, Dayjs];
  key: string;
};

const rangePresets: RangePreset[] = [
  { label: '今日', value: [dayjs(), dayjs()], key: 'today' },
  {
    label: '昨日',
    value: [dayjs().subtract(1, 'd'), dayjs().subtract(1, 'd')],
    key: 'yesterday',
  },
  {
    label: '最近7天',
    value: [dayjs().subtract(7, 'd'), dayjs().subtract(1, 'd')],
    key: 'last7days',
  },
  {
    label: '上周',
    value: [
      dayjs().startOf('w').subtract(1, 'w'),
      dayjs().endOf('w').subtract(1, 'w'),
    ],
    key: 'lastWeek',
  },
  {
    label: '最近15天',
    value: [dayjs().subtract(15, 'd'), dayjs().subtract(1, 'd')],
    key: 'last15days',
  },
  {
    label: '本月',
    value: [dayjs().startOf('M'), dayjs()],
    key: 'thisMonth',
  },
  {
    label: '最近30天',
    value: [dayjs().subtract(30, 'd'), dayjs().subtract(1, 'd')],
    key: 'last30days',
  },
  {
    label: '上月',
    value: [
      dayjs().startOf('M').subtract(1, 'M'),
      dayjs().endOf('M').subtract(1, 'M'),
    ],
    key: 'lastMonth',
  },
];

export default () => {
  const [value, setValue] = useState([dayjs(new Date()), dayjs(new Date())]);

  return (
    <HabitRangePicker
      value={value}
      onChange={(dates, dateString) => {
        setValue(dates);
      }}
      presets={rangePresets}
    />
  );
};
```

## 日期对比

最简单的用法，在浮层中可以选择或者输入日期。

```tsx
import { HabitRangePicker } from '@ddbor/habit';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export default () => {
  const [value, setValue] = useState([dayjs(new Date()), dayjs(new Date())]);
  const [compareValue, setCompareValue] = useState(true);

  return (
    <HabitRangePicker
      value={value}
      compared={compareValue}
      onChange={(dates, dateString, compared) => {
        setValue(dates);
        setCompareValue(compared);
        console.log(compared);
      }}
    />
  );
};
```

## 国际化配置

[Ant Design 日期选择框 国际化配置](https://ant-design.antgroup.com/components/date-picker-cn#%E5%9B%BD%E9%99%85%E5%8C%96%E9%85%8D%E7%BD%AE)

## API

| 参数                   | 说明                                                                                                                                                                                        | 类型                                                                                       | 默认值 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------ |
| `value`                | 日期范围                                                                                                                                                                                    | `[Dayjs, Dayjs]`                                                                           | -      |
| `popoverProps`         | 卡片的属性                                                                                                                                                                                  | [PopoverProps](https://ant-design.antgroup.com/components/popover-cn#api)                  | -      |
| `buttonProps`          | 按钮的属性                                                                                                                                                                                  | [ButtonProps](https://ant-design.antgroup.com/components/button-cn#api)                    | -      |
| `presetsButtonProps`   | 快捷日期按钮的属性                                                                                                                                                                          | [ButtonProps](https://ant-design.antgroup.com/components/button-cn#api)                    | -      |
| `subtmitButtonProps`   | 确定按钮的属性                                                                                                                                                                              | [ButtonProps](https://ant-design.antgroup.com/components/button-cn#api)                    | -      |
| `cancelButtonProps`    | 取消按钮的属性                                                                                                                                                                              | [ButtonProps](https://ant-design.antgroup.com/components/button-cn#api)                    | -      |
| `startDatePickerProps` | 开始日期选择框的属性                                                                                                                                                                        | [PickerProps](https://ant-design.antgroup.com/components/date-picker-cn#datepicker)        | -      |
| `endDatePickerProps`   | 结束日期选择框的属性                                                                                                                                                                        | [PickerProps](https://ant-design.antgroup.com/components/date-picker-cn#datepicker)        | -      |
| `presets`              | 预设时间范围快捷选择                                                                                                                                                                        | Array<[PresetType](/components/habit-range-picker#presettype)>                             | -      |
| `format`               | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | [formatType](#formattype)                                                                  | -      |
| `onChange`             | 日期范围发生变化的回调                                                                                                                                                                      | `(dates: [Dayjs, Dayjs],dateStrings: [string, string],compared: boolean \| null]) => void` | -      |

### PresetType

定义

```tsx | pure
export type PresetType = { label: React.ReactNode; value: [Dayjs, Dayjs] } & {
  [key: string]: any;
};
```

引入

```tsx | pure
import { PresetType } from '@ddbor/habit';
```

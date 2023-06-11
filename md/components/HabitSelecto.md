---
nav: 组件
group:
  order: 4
order: 4
---

# 框选

## 时间选择

```tsx
import { HabitTimeSelecto } from '@ddbor/habit';
import { useState } from 'react';

const list = Array.from({ length: 24 }).fill(null);

export default () => {
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);

  return (
    <HabitTimeSelecto
      content={list.map((item, index) => (
        <li
          key={index}
          data-index={index}
          style={{
            backgroundColor: selectedIndex.includes(index) ? 'black' : 'white',
          }}
        ></li>
      ))}
      events={{
        selectEnd: (e) => {
          let indexArr = e.afterAdded.map((el) => Number(el.dataset.index));
          const removeArr = indexArr.filter((item) =>
            selectedIndex.includes(item),
          );
          indexArr = [...indexArr, ...selectedIndex].filter(
            (item) => !removeArr.includes(item),
          );
          setSelectedIndex(indexArr);
        },
      }}
    />
  );
};
```

## 周时间选择

```tsx
import { HabitWeekTimeSelecto } from '@ddbor/habit';
import { useState } from 'react';

const list = Array.from({ length: 48 }).fill(null);

const someFn = (arr, [week, index]) =>
  arr.some((val) => val[0] === week && val[1] === index);

export default () => {
  const [selectedIndex, setSelectedIndex] = useState<Array<number[]>>([]);

  return (
    <div
      style={{
        overflow: 'auto',
      }}
    >
      <HabitWeekTimeSelecto
        style={{
          width: 1100,
        }}
        render={(weekIndex) =>
          list.map((item, index) => (
            <li
              key={index}
              data-index={index}
              data-week={weekIndex}
              style={{
                backgroundColor: someFn(selectedIndex, [weekIndex, index])
                  ? 'black'
                  : 'white',
              }}
            ></li>
          ))
        }
        events={{
          selectEnd: (e) => {
            let indexArr = e.afterAdded.map((el) => [
              Number(el.dataset.week),
              Number(el.dataset.index),
            ]);
            const removeArr = indexArr.filter((item) =>
              someFn(selectedIndex, item),
            );
            indexArr = [...indexArr, ...selectedIndex].filter(
              (item) => !someFn(removeArr, item),
            );
            setSelectedIndex(indexArr);
          },
        }}
      />
    </div>
  );
};
```

## API

| 参数      | 说明                                                                                           | 类型                                                                    | 默认值 |
| --------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------ |
| `events`  | [selecto 的事件](https://daybrush.com/selecto/release/latest/doc/Selecto.html#events)          | `{ [T in keyof Partial<SelectoEvents>]: (e: SelectoEvents[T]) => any }` | -      |
| `options` | [selecto 的配置](https://daybrush.com/selecto/release/latest/doc/Selecto.html#.SelectoOptions) | `Partial<SelectoOptions>`                                               | -      |

### HabitTimeSelecto

| 参数      | 说明           | 类型              | 默认值 |
| --------- | -------------- | ----------------- | ------ |
| `content` | 可选择区域内容 | `React.ReactNode` | -      |

### HabitWeekTimeSelecto

| 参数        | 说明             | 类型                                     | 默认值 |
| ----------- | ---------------- | ---------------------------------------- | ------ |
| `render`    | 每行的内容       | `(weekIndex: number) => React.ReactNode` | -      |
| `className` | 根元素 className | `string`                                 | -      |
| `style`     | 根元素 style     | `CSSProperties`                          | -      |

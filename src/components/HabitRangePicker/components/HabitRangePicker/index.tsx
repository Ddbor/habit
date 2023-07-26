import { CalendarOutlined, DownOutlined } from '@ant-design/icons';
import {
  Button,
  ButtonProps,
  DatePicker,
  Divider,
  Popover,
  PopoverProps,
  Switch,
} from 'antd';
import React, { useCallback, useState, useEffect, useMemo } from 'react';
import './index.css';
import dayjs, { Dayjs } from 'dayjs';
import { RangePickerProps } from 'antd/es/date-picker';
import { PickerProps } from 'antd/es/date-picker/generatePicker';

export type PresetType = { label: React.ReactNode; value: [Dayjs, Dayjs] } & {
  [key: string]: any;
};

// 这个仅仅是为了不传入预设日期时为了显示时文本比较好看
const defaultPresets = (): PresetType[] => [
  { label: '今日', value: [dayjs(), dayjs()] },
  {
    label: '昨日',
    value: [dayjs().subtract(1, 'd'), dayjs().subtract(1, 'd')],
  },
];

export type HabitRangePickerProps = {
  value: [Dayjs, Dayjs]; // 日期范围
  popoverProps?: PopoverProps; // 卡片的属性
  buttonProps?: ButtonProps; // 按钮的属性
  presetsButtonProps?: ButtonProps; // 快捷日期按钮的属性
  subtmitButtonProps?: ButtonProps; // 确定按钮的属性
  cancelButtonProps?: ButtonProps; // 取消按钮的属性
  startDatePickerProps?: PickerProps<Dayjs> & any; // 开始日期选择框的属性
  endDatePickerProps?: PickerProps<Dayjs> & any; // 结束日期选择框的属性
  presets?: PresetType[]; // 预设时间范围快捷选择
  format?: string; // 设置日期格式
  compared?: boolean; // 对比开关状态，传入此字段会开启一个对比开关
  onChange?: (
    dates: [Dayjs, Dayjs],
    dateStrings: [string, string],
    compared: boolean | null,
  ) => void; // 日期范围发生变化的回调
};

export const HabitRangePicker: React.FC<HabitRangePickerProps> = ({
  value,
  popoverProps,
  buttonProps,
  presetsButtonProps,
  subtmitButtonProps,
  cancelButtonProps,
  presets,
  startDatePickerProps,
  endDatePickerProps,
  format = 'YYYY-MM-DD',
  compared,
  onChange,
}) => {
  // 原日期字符串，用于计算真正显示在页面上的文字
  const [showRangeString, setShowRangeString] = useState<[string, string]>([
    '',
    '',
  ]);
  // 存储选择的日期，用于在提交时使用
  const [range, setRange] = useState<[Dayjs, Dayjs]>(value);
  // 存储选择的日期字符串，用于在提交时使用
  const [rangeString, setRangeString] = useState<[string, string]>(['', '']);
  // 气泡卡片显隐
  const [popoverOpen, setPopoverOpen] = useState(false);
  // 是否显示对比开关
  const showCompared = useMemo(() => {
    return typeof compared === 'boolean';
  }, [compared]);
  // 对比开关的当前状态，用于在提交时使用
  const [isCompared, setIsCompared] = useState<boolean | null>(false);

  // 设置全新的对比开关状态
  useEffect(() => {
    setIsCompared(showCompared ? compared! : null);
  }, [compared, showCompared]);

  // 禁用结束日期选项
  // 当选择了对比开关时，结束日期选项会被禁用
  // 负责用户提交后的状态处理
  const disabledEndDatePicker = useMemo(
    () => showCompared && !compared,
    [showCompared, compared],
  );

  // 打开时结束日期禁用状态
  // 负责用户正在操作时的状态处理
  const disabledEndDatePickerWhenOpen = useMemo(
    () => showCompared && !isCompared,
    [showCompared, isCompared],
  );

  // 下拉图片旋转角度
  const downRotatedeg = useMemo(() => (popoverOpen ? 180 : 0), [popoverOpen]);

  // 快捷日期文本
  const presetTextList = useMemo(() => {
    // 当结束日期被禁用时，只显示开始日期
    if (showCompared) {
      return [
        defaultPresets().find((item) =>
          dayjs(item.value[0]).isSame(value[0], 'd'),
        )?.label || showRangeString[0],
        disabledEndDatePicker
          ? ''
          : defaultPresets().find((item) =>
              dayjs(item.value[0]).isSame(value[1], 'd'),
            )?.label || showRangeString[1],
      ];
    }

    // 当结束日期未被禁用时，开始日期和结束日期都显示
    const commonLabel = (presets || [])
      ?.concat(defaultPresets())
      .find(
        (item) =>
          dayjs(item.value[0]).isSame(value[0], 'd') &&
          dayjs(item.value[1]).isSame(value[1], 'd'),
      )?.label;

    // 当开始日期匹配到了，结束日期不显示
    return [
      commonLabel || showRangeString[0],
      commonLabel ? '' : showRangeString[1],
    ];
  }, [value, presets, disabledEndDatePicker, showCompared, showRangeString]);

  // 文字样式
  const showRangeStringStyle = useMemo(
    () =>
      ({
        textAlign: presetTextList[1] ? 'center' : 'left',
      } as any),
    [presetTextList],
  );

  // 开始日期禁用的范围
  const disabledStartDate: RangePickerProps['disabledDate'] = useCallback(
    (current: Dayjs) => {
      if (!current) {
        return false;
      }
      // 当结束日期被禁用时,开始日期不能大于今天
      if (disabledEndDatePickerWhenOpen) {
        return current > dayjs().endOf('d');
      }
      // 当开启对比日期时，开始日期不等于结束日期，开始日期不大于今天
      if (!!isCompared) {
        return (
          current > dayjs().endOf('d') ||
          (range[1] && current.isSame(range[1], 'd'))
        );
      }
      // 当结束日期不被禁用时，开始日期不能大于结束日期
      return range[1] && current > range[1];
    },
    [range[1], disabledEndDatePickerWhenOpen],
  );

  // 结束日期禁用的范围
  const disabledEndDate: RangePickerProps['disabledDate'] = useCallback(
    (current: Dayjs) => {
      if (!current) {
        return false;
      }
      // 不大于今天
      if (!!isCompared) {
        return current > dayjs().endOf('d');
      }
      // 结束日期不能小于开始日期，也不能大于今天
      return (range[0] && current < range[0]) || current > dayjs().endOf('d');
    },
    [range[0], isCompared],
  );

  // 监听日期范围变化，更新存储的日期
  useEffect(() => {
    setRange(value);
    const rangeString: [string, string] = [
      dayjs(value[0]).format(format),
      dayjs(value[1]).format(format),
    ];
    setShowRangeString(rangeString);
    setRangeString(rangeString);
  }, [value]);

  // 开始日期选择
  const handleStartChange = (date: Dayjs, dateString: string) => {
    setRange([date, range[1]]);
    setRangeString([dateString, rangeString[1]]);
  };

  // 结束日期选择
  const handleEndChange = (date: Dayjs, dateString: string) => {
    setRange([range[0], date]);
    setRangeString([rangeString[0], dateString]);
  };

  // 气泡卡片显示隐藏事件
  const handlePopoverOpenChange = (open: boolean) => {
    if (!!buttonProps?.disabled) {
      setPopoverOpen(false);
    } else {
      setPopoverOpen(open);
    }
  };

  // 确定
  const handleOk = () => {
    setPopoverOpen(false);
    onChange?.(range, rangeString, isCompared);
  };

  // 快捷日期点击
  const handlePresetsClick = (item: {
    label: React.ReactNode;
    value: [Dayjs, Dayjs];
  }) => {
    setRange(item.value);
    const rangeString: [string, string] = [
      dayjs(item.value[0]).format(format),
      dayjs(item.value[1]).format(format),
    ];
    setRangeString(rangeString);
    setPopoverOpen(false);
    onChange?.(item.value, rangeString, isCompared);
  };

  // 预设时间范围快捷选择列表
  const presetNodes = useCallback(() => {
    return presets?.map((item, index) => {
      if (typeof item.label === 'string') {
        return (
          <div className="habit-range-picker-popover-presets-item" key={index}>
            <Button
              type="link"
              size="small"
              style={{
                padding: 0,
                textAlign: 'left',
                width: '100%',
              }}
              onClick={() => handlePresetsClick(item)}
              {...presetsButtonProps}
            >
              {item.label}
            </Button>
          </div>
        );
      }
      return item.label;
    });
  }, [presets]);

  return (
    <>
      <Popover
        trigger="click"
        placement="bottom"
        open={popoverOpen}
        getPopupContainer={(triggerNode) => triggerNode}
        overlayInnerStyle={{
          padding: 0,
        }}
        {...popoverProps}
        onOpenChange={handlePopoverOpenChange}
        content={
          <div className="habit-range-picker-popover-content">
            <div className="habit-range-picker-popover-head">
              <div className="habit-range-picker-popover-head-title">
                <div>选择日期:</div>
                {showCompared && (
                  <div className="habit-range-picker-popover-head-switch">
                    <span>对比</span>
                    <Switch
                      size="small"
                      checked={!!isCompared}
                      onChange={(checked) => setIsCompared(checked)}
                    />
                  </div>
                )}
              </div>
              <div className="habit-range-picker-popover-date">
                <DatePicker
                  showToday={false}
                  allowClear={false}
                  size="small"
                  value={range[0]}
                  disabledDate={disabledStartDate}
                  onChange={handleStartChange}
                  {...startDatePickerProps}
                />
                <span className="habit-range-picker-popover-date-separator">
                  -
                </span>
                <DatePicker
                  showToday={false}
                  allowClear={false}
                  size="small"
                  placement="bottomRight"
                  value={range[1]}
                  disabledDate={disabledEndDate}
                  onChange={handleEndChange}
                  {...endDatePickerProps}
                  disabled={disabledEndDatePickerWhenOpen}
                />
              </div>
            </div>
            <Divider style={{ margin: 0 }} />
            {presets && presets.length && (
              <>
                <div className="habit-range-picker-popover-presets">
                  <div className="habit-range-picker-popover-presets-title">
                    快捷日期:
                  </div>
                  <div className="habit-range-picker-popover-presets-list">
                    {presetNodes()}
                  </div>
                </div>
                <Divider style={{ margin: 0 }} />
              </>
            )}
            <div className="habit-range-picker-popover-footer">
              <Button
                size="small"
                {...cancelButtonProps}
                style={{ marginRight: '8px' }}
                onClick={() => setPopoverOpen(false)}
              >
                取消
              </Button>
              <Button
                type="primary"
                size="small"
                {...subtmitButtonProps}
                onClick={() => handleOk()}
              >
                确定
              </Button>
            </div>
          </div>
        }
      >
        <div className="habit-range-picker">
          <Button {...buttonProps} onClick={() => setPopoverOpen(!popoverOpen)}>
            <div className="habit-range-picker-button">
              <CalendarOutlined
                style={{
                  color: '#999',
                }}
              />
              <div className="habit-range-picker-button-text">
                <span
                  className="habit-range-picker-button-text-item"
                  style={showRangeStringStyle}
                >
                  {presetTextList[0]}
                </span>
                {presetTextList[1] && (
                  <>
                    <span className="habit-range-picker-button-text-separator">
                      {showCompared ? '对比' : '-'}
                    </span>
                    <span
                      className="habit-range-picker-button-text-item"
                      style={showRangeStringStyle}
                    >
                      {presetTextList[1]}
                    </span>
                  </>
                )}
              </div>
              <DownOutlined
                style={{
                  color: '#999',
                  transform: `rotate(${downRotatedeg}deg)`,
                  transition: 'all 0.3s',
                }}
              />
            </div>
          </Button>
        </div>
      </Popover>
    </>
  );
};

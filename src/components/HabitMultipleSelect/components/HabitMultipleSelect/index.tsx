/**
 * 使用 Dropdown 封装的多选下拉框
 */

import { CloseCircleFilled, DownOutlined } from '@ant-design/icons';
import {
  Badge,
  Button,
  ButtonProps,
  Checkbox,
  Col,
  Empty,
  Input,
  Popover,
  PopoverProps,
  Row,
  theme,
} from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { SearchProps } from 'antd/es/input';
import React from 'react';
import { useMemo, useState } from 'react';
import './index.css';

const { Search } = Input;

const { useToken } = theme;

type Props = {
  /** button className */
  className?: string;
  /** button style */
  style?: React.CSSProperties;
  /** value */
  value?: (string | number)[];
  /** value 变化或者清空时触发 */
  onChange?: (value: CheckboxValueType[]) => void;
  /** 选项 */
  options?: { label: string; value: string | number }[];
  /** 气泡卡片属性 */
  popoverProps?: PopoverProps;
  /** button属性 */
  buttonProps?: ButtonProps;
  /** 搜索框属性 */
  searchProps?: SearchProps;
  /** buttonText */
  buttonText?: React.ReactNode;
  /** 是否显示搜索框 */
  showSearch?: boolean;
};

export const HabitMultipleSelect: React.FC<Props> = ({
  popoverProps,
  buttonProps,
  searchProps,
  className,
  value,
  style,
  onChange,
  options = [],
  buttonText,
  showSearch = true,
}) => {
  // 气泡弹窗是否打开
  const [open, setOpen] = useState(false);
  // 搜索框的值
  const [searchValue, setSearchValue] = useState('');
  // 搜索后的选项
  const showOptions = useMemo(() => {
    return options.filter((item) => {
      return item.label.includes(searchValue);
    });
  }, [searchValue, options]);
  // button hover，用来控制清空按钮的显示
  const [hover, setHover] = useState(false);

  const { token } = useToken();

  const iconStyle = {
    color: token.colorTextQuaternary,
    fontSize: token.fontSizeIcon,
  };

  return (
    <>
      <Popover
        open={open}
        onOpenChange={setOpen}
        placement="bottom"
        trigger="click"
        overlayStyle={{
          width: 250,
        }}
        {...popoverProps}
        content={
          <>
            {!!showSearch && (
              <Search
                placeholder="名称搜索"
                className="habit-multiple-select-search"
                allowClear
                size="small"
                {...searchProps}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            )}

            <Checkbox.Group value={value} onChange={onChange}>
              <Row gutter={[0, 10]}>
                {showOptions.map((item) => (
                  <Col span={24} key={item.value}>
                    <Checkbox value={item.value}>{item.label}</Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
            {!showOptions.length && <Empty description={false} />}
          </>
        }
      >
        <Button
          className={`habit-multiple-select-button ${className}`}
          style={style}
          {...buttonProps}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="habit-multiple-select-button-content">
            <span>{buttonText}</span>
            {!!value?.length ? (
              hover ? (
                <CloseCircleFilled
                  className="habit-multiple-select-icon"
                  style={iconStyle}
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange?.([]);
                  }}
                />
              ) : (
                <Badge
                  className="habit-multiple-select-icon"
                  count={value?.length}
                  showZero
                  size="small"
                  color={token.colorPrimary}
                />
              )
            ) : (
              <DownOutlined
                className="habit-multiple-select-icon"
                style={iconStyle}
              />
            )}
          </div>
        </Button>
      </Popover>
    </>
  );
};

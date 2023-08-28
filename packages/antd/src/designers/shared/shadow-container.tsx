import React, { useState } from 'react';
import { css, Box, HTMLCoralProps } from 'coral-system';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

const badgeStyle = css`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  line-height: 14px;
  outline: none;
  border: 0;
  z-index: 1;
`;

interface ShadowContainerProps extends HTMLCoralProps<'div'> {
  /**
   * 标签文本
   */
  label?: string;
  /**
   * 类型
   * effect - 用于副作用容器
   * modal - 用于弹窗容器
   */
  type?: 'effect' | 'modal';
  /**
   * 占位说明
   */
  placeholder?: string;
  children?: React.ReactNode;
}

const colorPallet = {
  effect: ['#531dab', '#d3adf7', '#f9f0ff'],
  modal: ['#c41d7f', '#ffadd2', '#fff0f6'],
  // modal: ['#0958d9', '#91caff', '#e6f4ff'],
};

/**
 * 影子容器，适合特殊的的组件，例如状态容器，条件容器
 */
export function ShadowContainer({
  type = 'effect',
  label,
  placeholder = '请拖拽内容到此',
  children,
  ...rest
}: ShadowContainerProps) {
  const [fold, setFold] = useState(false);
  const [textColor, borderColor, bgColor] = colorPallet[type];
  const contentStyle: HTMLCoralProps<'div'> = fold
    ? {
        display: 'none',
        height: 0,
        opacity: 0,
        overflow: 'hidden',
      }
    : {};
  return (
    <Box
      className="ShadowContainer"
      position="relative"
      border="dashed"
      borderColor={borderColor}
      minHeight="14px"
    >
      {label && (
        <Box
          as="button"
          className="ShadowContainerBadge"
          bg={bgColor}
          color={textColor}
          css={badgeStyle}
        >
          {label}
          <Box
            display="inline-block"
            className="ShadowContainerFoldBtn"
            ml="s"
            onClick={() => setFold(!fold)}
          >
            {fold ? <CaretDownOutlined /> : <CaretUpOutlined />}
          </Box>
        </Box>
      )}
      <Box className="ShadowContainerContent" p="m" {...contentStyle} {...rest}>
        {children || (
          <Box fontSize="12px" color="text.disabled" textAlign="center">
            {placeholder}
          </Box>
        )}
      </Box>
    </Box>
  );
}

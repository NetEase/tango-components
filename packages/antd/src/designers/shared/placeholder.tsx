import React from 'react';
import { css } from 'coral-system';
import { SLOT } from '@music163/tango-helpers';
import { DispatchButton } from './dispatch-button';
import { Box, BoxProps } from '../../components';

export interface PlaceholderProps extends BoxProps {
  /**
   * 尺寸
   * small - 适合文本，按钮等小型控件
   * medium - 中型控件
   * large - 大型控件
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 占位文本
   */
  placeholder?: string;
  /**
   * 按钮文本
   */
  buttonText?: string;
  /**
   * 要实例化的组件名称
   */
  targetComponentName?: string;
}

const placeholderStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  color: #333;
  border: 1px solid #666;
  padding-left: 12px;
  padding-right: 12px;
  user-select: none;
  overflow: hidden;
  white-space: nowrap;

  & ~ .tango-placeholder {
    margin-top: 12px;
  }
`;

const sizeMap = {
  small: '32px',
  medium: '64px',
  large: '80px',
};

export function Placeholder({
  size = 'medium',
  placeholder = '拖拽组件或区块到这里',
  targetComponentName,
  buttonText = targetComponentName
    ? `点击初始化该区域为 ${targetComponentName}`
    : '点击初始化该区域',
  ...rest
}: PlaceholderProps) {
  const height = sizeMap[size];
  return (
    <Box className="tango-placeholder" height={height} css={placeholderStyle} {...rest}>
      {placeholder}
      {targetComponentName && (
        <DispatchButton
          type="link"
          payload={{
            type: 'replaceNode',
            targetId: rest[SLOT.dnd],
            sourceName: targetComponentName,
          }}
        >
          {buttonText}
        </DispatchButton>
      )}
    </Box>
  );
}

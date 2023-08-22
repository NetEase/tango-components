import { css } from 'styled-components';
import { coral } from 'coral-system';

import type { HTMLCoralProps } from 'coral-system';

const truncatedStyle = css`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const textClampStyle = css<any>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.$lineClamp};
`;

const textStyle = css<any>`
  ${(props) => props.$lineClamp > 0 && textClampStyle};
  ${(props) => props.$truncated && truncatedStyle};
`;

export type TextProps = HTMLCoralProps<'span'> & {
  /**
   * 文本对齐方式
   */
  align?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  /**
   * 是否在容器内自动截断（单行展示）
   */
  isTruncated?: boolean;
  /**
   * 最多展示的行数（超出截断）
   */
  lineClamp?: number;
  /**
   * 格式化类型
   */
  type?: 'number' | 'date';
};

export const Text = coral<'span', TextProps>('span', textStyle, {
  prefix: '--music',
  attrs: (props) => ({
    textAlign: props.align,
    $truncated: props.isTruncated,
    $lineClamp: props.lineClamp,
  }),
});

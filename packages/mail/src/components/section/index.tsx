import React from 'react';
import { defineComponent } from '@music163/tango-boot';
import { Placeholder } from '../placeholder';

export interface SectionProps extends React.ComponentPropsWithoutRef<'table'> {
  /**
   * 内边距
   */
  p?: string;
  /**
   * 背景色
   */
  bg?: string;
  /**
   * 文本色
   */
  color?: string;
}

function SectionView({ p = '0', children, bg, color, style, ...props }: SectionProps) {
  return (
    <table
      align="center"
      width="100%"
      border={0}
      cellPadding={p}
      cellSpacing="0"
      role="presentation"
      style={getTableStyle({ bg, color, style })}
      {...props}
    >
      <tbody>
        <tr>
          <td>{children}</td>
        </tr>
      </tbody>
    </table>
  );
}

function getTableStyle({
  bg,
  color,
  style,
}: Pick<SectionProps, 'style' | 'bg' | 'color'>): React.CSSProperties {
  return {
    backgroundColor: bg,
    color,
    ...style,
  };
}

export const Section = defineComponent(SectionView, {
  name: 'Section',
  designerConfig: {
    defaultProps: {
      children: <Placeholder />,
      style: {
        border: '1px dashed #999',
      },
    },
  },
});

import { defineComponent } from '@music163/tango-boot';
import React from 'react';
import { Placeholder } from './placeholder';

export interface BoxProps extends React.ComponentPropsWithoutRef<'div'> {
  p?: string;
  m?: string;
  bg?: string;
  color?: string;
}

function BoxView({ p, m, bg, color, style, children, ...props }: BoxProps) {
  return (
    <div {...props} style={getBoxStyle({ p, m, bg, color, style })}>
      {children}
    </div>
  );
}

function getBoxStyle({
  p,
  m,
  bg,
  color,
  style,
}: Pick<BoxProps, 'p' | 'm' | 'bg' | 'color' | 'style'>): React.CSSProperties {
  return {
    padding: p,
    margin: m,
    backgroundColor: bg,
    color,
    ...style,
  };
}

export const Box = defineComponent(BoxView, {
  name: 'Box',
  designerConfig: {
    defaultProps: {
      children: <Placeholder />,
    },
  },
});

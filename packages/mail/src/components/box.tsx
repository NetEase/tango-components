import { defineComponent } from '@music163/tango-boot';
import React from 'react';
import { Placeholder } from './placeholder';

export type BoxProps = React.ComponentPropsWithoutRef<'div'>;

function BoxView({ children, ...props }: BoxProps) {
  return <div {...props}>{children}</div>;
}

export const Box = defineComponent(BoxView, {
  name: 'Box',
  designerConfig: {
    defaultProps: {
      children: <Placeholder />,
    },
  },
});

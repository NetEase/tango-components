import React from 'react';
import { Box as BaseBox, BoxProps } from '@music163/foundation';
import { withDnd } from '@music163/tango-helpers';
import { Placeholder } from './placeholder';

export const Box: React.ComponentType<BoxProps> = withDnd({
  name: 'Box',
  hasWrapper: false,
})(({ isRender = true, children = <Placeholder />, ...rest }: BoxProps) =>
  React.createElement(BaseBox, { opacity: isRender ? undefined : 0.4, ...rest }, children),
);

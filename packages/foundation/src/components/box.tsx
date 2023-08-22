import React from 'react';
import { coral, forwardRef } from 'coral-system';
import type { HTMLCoralProps } from 'coral-system';

export interface BoxProps extends HTMLCoralProps<'div'> {
  /**
   * 是否渲染
   */
  isRender?: boolean;
}

const Div = coral('div', undefined, {
  prefix: '--music',
});

export const Box = forwardRef<BoxProps, 'div'>(({ isRender = true, ...props }, ref) => {
  if (isRender === false) return <></>;
  return <Div ref={ref} {...props} />;
});

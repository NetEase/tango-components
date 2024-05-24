import { defineComponent } from '@music163/tango-boot';
import React from 'react';
import { Placeholder } from './placeholder';
import cx from 'classnames';

export type CardProps = React.ComponentPropsWithoutRef<'div'>;

function CardView({ className, style, children, ...props }: CardProps) {
  return (
    <div
      {...props}
      style={style}
      className={cx(
        'min-w-0 m-1 rounded-md border-solid border border-slate-300 overflow-hidden bg-white',
        className,
      )}
    >
      {children}
    </div>
  );
}

export const Card = defineComponent(CardView, {
  name: 'Card',
  designerConfig: {
    defaultProps: {
      children: <Placeholder text="拖拽内容到此处" />,
    },
  },
});

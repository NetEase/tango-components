import { defineComponent } from '@music163/tango-boot';
import React from 'react';

export type CardProps = React.ComponentPropsWithoutRef<'div'>;

function CardView({ className, style, children, ...props }: CardProps) {
  return (
    <div
      {...props}
      style={style}
      className="min-w-0 m-1 rounded-md border-solid border border-slate-300 overflow-hidden bg-white"
    >
      {children}
    </div>
  );
}

export const Card = defineComponent(CardView, {
  name: 'Card',
});

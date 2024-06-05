import { defineComponent } from '@music163/tango-boot';
import React from 'react';
import cx from 'classnames';
import { Placeholder } from './placeholder';

export type ListProps = React.ComponentPropsWithoutRef<'ul'>;

export function ListView({ children, style, className, ...props }: ListProps) {
  return (
    <ul
      {...props}
      className={cx('m-0 p-0 list-disc list-inside text-slate-900', className)}
      style={listStyle(style)}
    >
      {children}
    </ul>
  );
}

const listStyle = (style?: React.CSSProperties) => {
  return {
    ...style,
  };
};

export const List = defineComponent(ListView, {
  name: 'List',
  designerConfig: {
    defaultProps: {
      children: <Placeholder />,
    },
  },
});

export type ListItemProps = React.ComponentPropsWithoutRef<'li'> & {
  text?: string;
};

export function ListItemView({ text, children, style, ...props }: ListItemProps) {
  return (
    <li {...props} style={listItemStyle(style)}>
      {text || children}
    </li>
  );
}

const listItemStyle = (style?: React.CSSProperties) => {
  return {
    marginBottom: 8,
    ...style,
  };
};

export const ListItem = defineComponent(ListItemView, {
  name: 'ListItem',
});

import { defineComponent } from '@music163/tango-boot';
import React from 'react';
import { Placeholder } from './placeholder';

export type ListProps = React.ComponentPropsWithoutRef<'ul'>;

export function ListView({ children, style, ...props }: ListProps) {
  return (
    <ul {...props} style={listStyle(style)}>
      {children}
    </ul>
  );
}

const listStyle = (style?: React.CSSProperties) => {
  return {
    margin: 0,
    padding: 0,
    listStyle: 'none',
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
    <li {...props} className="text-body-color flex text-base" style={listItemStyle(style)}>
      <span className="bg-gray-600 mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base" />
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

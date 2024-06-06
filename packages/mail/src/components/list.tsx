import { defineComponent } from '@music163/tango-boot';
import React from 'react';
import cx from 'classnames';
import { Placeholder } from './placeholder';

export interface ListProps extends React.ComponentPropsWithoutRef<'ul'> {
  /**
   * 列表项的标记类型
   */
  marker?: 'disc' | 'none';
}

export function ListView({ marker = 'disc', children, style, className, ...props }: ListProps) {
  const classNames = cx(
    'm-0 p-0 list-inside text-slate-900',
    {
      'list-none': marker === 'none',
      'list-disc': marker === 'disc',
    },
    className,
  );
  return (
    <ul {...props} className={classNames} style={listStyle(style)}>
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

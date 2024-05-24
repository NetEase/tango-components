import React from 'react';

export interface PlaceholderProps extends React.ComponentPropsWithoutRef<'div'> {
  text?: string;
}

export function Placeholder({ text = '这里可以放置内容', style, ...props }: PlaceholderProps) {
  return (
    <div {...props} style={placeholderStyle(style)}>
      {text}
    </div>
  );
}

const placeholderStyle = (style?: React.CSSProperties) => {
  return {
    padding: 16,
    backgroundColor: '#f3f3f3',
    border: '1px solid, #666666',
    ...style,
  };
};

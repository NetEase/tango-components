import React from 'react';
import { defineComponent } from '@music163/tango-boot';
import { Text as Comp } from '@react-email/components';
import cx from 'classnames';

export type TextProps = React.ComponentPropsWithoutRef<'p'> & {
  /**
   * 文本大小
   */
  fontSize?: number;
  /**
   * 文本色
   */
  color: string;
  /**
   * 避免文本换行
   */
  isTruncate?: boolean;
};

export const Text = defineComponent(
  ({ isTruncate, color, style, fontSize, className, ...props }: TextProps) => {
    const classNames = cx(
      {
        truncate: isTruncate,
      },
      className,
    );
    return <Comp className={classNames} style={{ color, fontSize, ...style }} {...props} />;
  },
  {
    name: 'Text',
  },
);

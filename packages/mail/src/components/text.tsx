import React from 'react';
import { defineComponent } from '@music163/tango-boot';
import { Text as Comp } from '@react-email/components';
import cx from 'classnames';

export type TextProps = React.ComponentPropsWithoutRef<'p'> & {
  /**
   * 避免文本换行
   */
  isTruncate?: boolean;
};

export const Text = defineComponent(
  ({ isTruncate, className, ...props }: TextProps) => {
    const classNames = cx(
      {
        truncate: isTruncate,
      },
      className,
    );
    return <Comp className={classNames} {...props} />;
  },
  {
    name: 'Text',
  },
);

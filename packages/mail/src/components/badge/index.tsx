import { defineComponent } from '@music163/tango-boot';
import React from 'react';
import cx from 'classnames';

export interface BadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * 颜色
   */
  color?: 'blue' | 'gray' | 'red' | 'green' | 'yellow' | 'purple' | 'indigo' | 'pink';
  /**
   * 是否显示边框
   */
  showBorder?: boolean;
  /**
   * 是否是胶囊样式
   */
  isPill?: boolean;
}

function BadgeView({
  color = 'blue',
  showBorder,
  isPill,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cx(
        'text-xs font-medium me-2 px-2.5 py-0.5 rounded',
        {
          [`bg-${color}-100 text-${color}-800`]: color,
          [`border border-solid border-${color}-400`]: showBorder,
          rounded: !isPill,
          'rounded-full': isPill,
        },
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export const Badge = defineComponent(BadgeView, {
  name: 'Badge',
  designerConfig: {
    display: 'inline-block',
  },
});

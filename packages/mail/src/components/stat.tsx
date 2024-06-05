import { defineComponent } from '@music163/tango-boot';
import React from 'react';
import cx from 'classnames';

export interface StatProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * 标签
   */
  label?: string;
  /**
   * 指标数值
   */
  number?: string;
  /**
   * 辅助文本
   */
  helpText?: string;
}

function StatView({ label, number, helpText, className, style, children, ...props }: StatProps) {
  return (
    <div {...props} style={statStyle(style)} className={cx('p-4', className)}>
      <p className="mb-2 text-sm font-medium text-gray-500 truncate">{label}</p>
      <p className="m-0 text-3xl font-semibold text-gray-700 truncate truncate">{number}</p>
      {helpText && <p className="mt-1 text-sm font-medium text-gray-400 truncate">{helpText}</p>}
    </div>
  );
}

const statStyle = (style: React.CSSProperties) => {
  return {
    display: 'inline-block',
    ...style,
  };
};

export const Stat = defineComponent(StatView, {
  name: 'Stat',
});

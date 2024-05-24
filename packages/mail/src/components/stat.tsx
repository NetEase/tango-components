import { defineComponent } from '@music163/tango-boot';
import React from 'react';

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
    <div {...props} style={style} className="p-4">
      <p className="mb-2 text-sm font-medium text-gray-500">{label}</p>
      <p className="mb-0 text-3xl font-semibold text-gray-700">{number}</p>
      {helpText && <p className="mt-1 text-sm font-medium text-gray-400">{helpText}</p>}
    </div>
  );
}

export const Stat = defineComponent(StatView, {
  name: 'Stat',
});

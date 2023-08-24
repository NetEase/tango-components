import React from 'react';
import { createContext, Box, BoxProps } from '@music163/foundation';

interface FormLayoutContext {
  /**
   * 布局方式
   */
  layout?: 'horizontal' | 'vertical' | 'inline';
  /**
   * 标签宽度
   */
  labelWidth?: number;
}

const [FormLayoutProvider, useFormLayoutContext] = createContext<FormLayoutContext>({
  strict: false,
  name: 'FormLayoutContext',
});

export function useFormLayout(props: FormLayoutContext) {
  const form = useFormLayoutContext();
  return {
    ...props,
    layout: props?.layout ?? form?.layout,
    labelWidth: props?.labelWidth ?? form?.labelWidth,
  };
}

export interface FormLayoutProps extends FormLayoutContext, BoxProps {}

export function FormLayout({ layout, labelWidth, children, ...rest }: FormLayoutProps) {
  const ctx = {
    layout,
    labelWidth,
  };
  return (
    <FormLayoutProvider value={ctx}>
      <Box as="form" {...rest}>
        {children}
      </Box>
    </FormLayoutProvider>
  );
}

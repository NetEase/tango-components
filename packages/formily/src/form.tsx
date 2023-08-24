import React from 'react';
import { FormProvider } from '@formily/react';
import { FormLayout, FormLayoutProps } from './form-layout';

export interface FormProps {
  layout?: FormLayoutProps['layout'];
  labelWidth?: FormLayoutProps['labelWidth'];
  form?: any;
  children?: React.ReactNode;
}

export function Form({ layout = 'horizontal', labelWidth = 100, form, children }: FormProps) {
  return (
    <FormProvider form={form}>
      <FormLayout layout={layout} labelWidth={labelWidth}>
        {children}
      </FormLayout>
    </FormProvider>
  );
}

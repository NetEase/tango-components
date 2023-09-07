import React, { useMemo } from 'react';
import { FormProvider } from '@formily/react';
import { FormLayout, FormLayoutProps } from './form-layout';
import { createForm } from '@formily/core';

export interface FormProps {
  layout?: FormLayoutProps['layout'];
  labelWidth?: FormLayoutProps['labelWidth'];
  form?: any;
  children?: React.ReactNode;
  onFinish?: (values: any) => void;
  onFinishFailed?: (errors: any[]) => void;
}

export function Form({
  layout = 'horizontal',
  labelWidth = 100,
  form: formProp,
  children,
  onFinish,
  onFinishFailed,
}: FormProps) {
  const form = useMemo(() => {
    return formProp ?? createForm();
  }, [formProp]);

  return (
    <FormProvider form={form}>
      <FormLayout
        layout={layout}
        labelWidth={labelWidth}
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();
          form.submit(onFinish).catch(onFinishFailed);
        }}
      >
        {children}
      </FormLayout>
    </FormProvider>
  );
}

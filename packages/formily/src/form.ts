import React, { useMemo } from 'react';
import { Form as FormilyForm, FormProps as FormilyFormProps } from '@formily/antd';
import { createForm } from '@formily/core';

export interface FormProps extends FormilyFormProps {}

export function Form({ form: formProp, ...props }: FormProps) {
  const form = useMemo(() => {
    return formProp || createForm();
  }, [formProp]);

  return React.createElement(FormilyForm, {
    form,
    colon: false,
    ...props,
  });
}

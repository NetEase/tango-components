import React from 'react';
import { Form as FormilyForm } from '@formily/antd';

export interface FormProps {}

export function Form(props: FormProps) {
  return React.createElement(FormilyForm, {
    colon: false,
    ...props,
  });
}

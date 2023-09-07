import React from 'react';
import { mapProps } from '@formily/react';
import { Input as AntdInput } from 'antd';
import { register } from '../register';

export const Input = register(
  'Input',
  AntdInput,
  mapProps((props, field: any) => ({
    ...props,
    suffix: <span>{field?.loading || field?.validating ? 'loading' : props.suffix}</span>,
  })),
);

export const TextArea = register('TextArea', AntdInput.TextArea);

export const Password = register('Password', AntdInput.Password);

import React from 'react';
import { connect, mapProps } from '@formily/react';
import { Input as AntdInput } from 'antd';

export const Input = connect(
  AntdInput,
  mapProps((props, field: any) => ({
    ...props,
    suffix: <span>{field?.loading || field?.validating ? 'loading' : props.suffix}</span>,
  })),
);

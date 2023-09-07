import React from 'react';
import { mapProps } from '@formily/react';
import { Cascader as AntdCascader } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { register } from '../register';

export const Cascader = register(
  'Cascader',
  AntdCascader,
  mapProps((props, field: any) => ({
    ...props,
    suffixIcon: field?.loading || field?.validating ? <LoadingOutlined /> : props.suffixIcon,
  })),
);

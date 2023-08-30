import React from 'react';
import { connect, mapProps } from '@formily/react';
import { Cascader as AntdCascader } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Cascader = connect(
  AntdCascader,
  mapProps((props, field: any) => ({
    ...props,
    suffixIcon: field?.loading || field?.validating ? <LoadingOutlined /> : props.suffixIcon,
  })),
);

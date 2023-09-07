import React from 'react';
import { mapProps } from '@formily/react';
import { Select as AntdSelect } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { register } from '../register';

export const Select = register(
  'Select',
  AntdSelect,
  mapProps((props, field: any) => {
    return {
      ...props,
      suffixIcon: field?.loading || field?.validating ? <LoadingOutlined /> : props.suffixIcon,
    };
  }),
);

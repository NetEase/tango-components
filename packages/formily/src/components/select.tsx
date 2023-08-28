import React from 'react';
import { connect, mapProps } from '@formily/react';
import { Select as AntdSelect } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Select = connect(
  AntdSelect,
  mapProps((props, field: any) => {
    return {
      ...props,
      suffixIcon: field?.loading || field?.validating ? <LoadingOutlined /> : props.suffixIcon,
    };
  }),
);

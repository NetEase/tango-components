import React from 'react';
import { mapProps } from '@formily/react';
import { TreeSelect as AntdTreeSelect } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { register } from '../register';

export const TreeSelect = register(
  'TreeSelect',
  AntdTreeSelect,
  mapProps(
    {
      dataSource: 'treeData',
    },
    (props, field: any) => {
      return {
        ...props,
        suffixIcon: field.loading || field?.validating ? <LoadingOutlined /> : props.suffixIcon,
      };
    },
  ),
);

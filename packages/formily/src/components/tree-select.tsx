import React from 'react';
import { connect, mapProps } from '@formily/react';
import { TreeSelect as AntdTreeSelect } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const TreeSelect = connect(
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

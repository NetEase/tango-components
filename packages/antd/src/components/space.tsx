import React from 'react';
import { defineComponent } from '@music163/tango-boot';
import { Space as AntSpace } from 'antd';
import { Placeholder } from './placeholder';

export const Space = defineComponent(AntSpace, {
  name: 'Space',
  designerConfig: {
    defaultProps: <Placeholder />,
  },
});

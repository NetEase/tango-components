import React from 'react';
import { defineComponent } from '@music163/tango-boot';
import { Box as BaseBox } from '@music163/foundation';
import { Placeholder } from './placeholder';

export const Box = defineComponent(BaseBox, {
  name: 'Box',
  designerConfig: {
    defaultProps: {
      children: <Placeholder />,
    },
  },
});

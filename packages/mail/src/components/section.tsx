import React from 'react';
import { defineComponent } from '@music163/tango-boot';
import { Section as Comp } from '@react-email/components';
import { Placeholder } from './placeholder';

export const Section = defineComponent(Comp, {
  name: 'Section',
  designerConfig: {
    defaultProps: {
      children: <Placeholder />,
      style: {
        border: '1px dashed #999',
      },
    },
  },
});

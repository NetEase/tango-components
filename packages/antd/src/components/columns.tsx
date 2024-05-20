import React from 'react';
import { defineComponent } from '@music163/tango-boot';
import { Columns as BaseColumns, Column as BaseColumn } from '@music163/foundation';
import { Placeholder } from './placeholder';

export const Columns = defineComponent(BaseColumns, {
  name: 'Columns',
  designerConfig: {
    defaultProps: {
      children: <Placeholder />,
      columns: 1
    },
  },
});

export const Column = defineComponent(BaseColumn, {
  name: 'Column',
  designerConfig: {
    defaultProps: {
      children: <Placeholder />,
    },
  },
});

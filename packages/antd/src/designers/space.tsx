import React from 'react';
import { withDnd } from '@music163/tango-helpers';
import { Space as BaseSpace } from '../components';
import { Placeholder } from './shared';

export const Space = withDnd({
  name: 'Space',
  display: 'inline-block',
  overrideProps: {
    children: <Placeholder />,
  },
})(BaseSpace);

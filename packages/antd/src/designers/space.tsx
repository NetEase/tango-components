import React from 'react';
import { withDnd } from '@music163/tango-helpers';
import { Placeholder } from './placeholder';
import { Space as BaseSpace } from '../components';

export const Space = withDnd({
  name: 'Space',
  display: 'inline-block',
  overrideProps: {
    children: <Placeholder />,
  },
})(BaseSpace);

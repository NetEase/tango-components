import React from 'react';
import { withDnd } from '@music163/tango-helpers';
import { Placeholder } from './placeholder';
import { Section as BaseSection, SectionProps } from '../components';

export const Section = withDnd({
  name: 'Section',
  hasWrapper: false,
})(({ isRender = true, children = <Placeholder />, ...rest }: SectionProps) =>
  React.createElement(
    BaseSection,
    {
      opacity: isRender ? undefined : 0.4,
      ...rest,
    },
    children,
  ),
);

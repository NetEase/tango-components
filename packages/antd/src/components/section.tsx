import React from 'react';
import cx from 'classnames';
import { Box, BoxProps } from '@music163/foundation';

export interface SectionProps extends Omit<BoxProps, 'title'> {
  title?: React.ReactNode;
}

export function Section({ title, className, children, ...rest }: SectionProps) {
  return (
    <Box
      as="section"
      className={cx('td-section', className)}
      bg="#FFF"
      borderRadius="2px"
      {...rest}
    >
      {title && (
        <Box p="24px 24px 0" fontSize="16px" fontWeight="500">
          {title}
        </Box>
      )}
      <Box p="24px">{children}</Box>
    </Box>
  );
}

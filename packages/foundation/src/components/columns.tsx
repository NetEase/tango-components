import React from 'react';
import { forwardRef } from 'coral-system';
import type { BoxProps } from './box';
import { Box } from './box';

export interface ColumnsProps extends BoxProps {
  /**
   * 列数
   */
  columns?: number;
}

export const Columns = forwardRef<ColumnsProps, 'div'>((props, ref) => {
  const { columns = 12, ...rest } = props;
  const templateColumns = getTemplateColumns(columns);

  return (
    // @ts-ignore
    <Box ref={ref} display="grid" gridGap="xxl" gridTemplateColumns={templateColumns} {...rest} />
  );
});

export interface ColumnProps extends BoxProps {
  colSpan?: number | string;
  colStart?: number;
  colEnd?: number;
  rowSpan?: number;
  rowStart?: number;
  rowEnd?: number;
}

export const Column = forwardRef<ColumnProps, 'div'>((props, ref) => {
  const { colSpan, colStart, colEnd, rowSpan, rowStart, rowEnd, ...rest } = props;
  return (
    <Box
      ref={ref}
      gridColumn={getSpan(colSpan)}
      gridColumnStart={colStart}
      gridColumnEnd={colEnd}
      gridRowStart={rowStart}
      gridRowEnd={rowEnd}
      gridRowSpan={rowSpan}
      {...rest}
    />
  );
});

function getTemplateColumns(columns: number) {
  return `repeat(${columns}, 1fr)`;
}

function getSpan(span: number | string) {
  return span === 'auto' ? 'auto' : `span ${span}/span ${span}`;
}

import React from 'react';
import { css } from 'coral-system';
import { Box, BoxProps } from '@music163/foundation';
import { PageHeader, PageHeaderProps } from 'antd';

const pageStyle = css`
  .td-pageHeader {
    background: #fff;
  }

  .td-pageContent > .td-section {
    margin-bottom: 24px;
  }
`;

export interface PageProps extends Omit<BoxProps, 'title'> {
  title?: PageHeaderProps['title'];
  subTitle?: PageHeaderProps['subTitle'];
  headerFooter?: PageHeaderProps['footer'];
}

export function Page({ title, subTitle, headerFooter, children, ...rest }: PageProps) {
  return (
    <Box bg="#f0f2f5" minHeight="100vh" css={pageStyle} {...rest}>
      <PageHeader
        className="td-pageHeader"
        backIcon={false}
        title={title}
        subTitle={subTitle}
        footer={headerFooter}
      />
      <Box className="td-pageContent" p="24px">
        {children}
      </Box>
    </Box>
  );
}

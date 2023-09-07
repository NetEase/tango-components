import React, { useEffect } from 'react';
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
  headerExtra?: PageHeaderProps['extra'];
  headerFooter?: PageHeaderProps['footer'];
  /**
   * 页面加载完成后执行的回调
   */
  onMount?: () => void;
  /**
   * 页面卸载前执行的回调
   */
  onUnmount?: () => void;
}

export function Page({
  title,
  subTitle,
  headerExtra,
  headerFooter,
  children,
  onMount,
  onUnmount,
  ...rest
}: PageProps) {
  useEffect(() => {
    onMount?.();
    return () => onUnmount?.();
  }, []);
  return (
    <Box bg="#f0f2f5" minHeight="100vh" css={pageStyle} {...rest}>
      <PageHeader
        className="td-pageHeader"
        backIcon={false}
        title={title}
        subTitle={subTitle}
        extra={headerExtra}
        footer={headerFooter}
      />
      <Box className="td-pageContent" p="24px">
        {children}
      </Box>
    </Box>
  );
}

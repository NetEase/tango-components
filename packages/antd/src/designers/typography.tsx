import React from 'react';
import { withDnd } from '@music163/tango-helpers';
import { Typography as BaseTypography } from '../components';
import { Placeholder } from './shared';

export const Title = withDnd({
  name: 'Title',
})(BaseTypography.Title as React.ComponentType<any>);

export const Paragraph = withDnd({
  name: 'Paragraph',
})(BaseTypography.Paragraph as React.ComponentType<any>);

type TypographyComponent = React.ForwardRefExoticComponent<
  any & React.RefAttributes<React.ReactElement>
> & {
  Title: typeof Title;
  Paragraph: typeof Paragraph;
  Link: typeof BaseTypography.Link;
  Text: typeof BaseTypography.Text;
};

export const Typography: TypographyComponent = withDnd({
  name: 'Typography',
  hasWrapper: false,
})(({ children, ...rest }: any) => {
  return (
    <BaseTypography {...rest}>
      {children ?? <Placeholder placeholder="添加标题或段落到这里" />}
    </BaseTypography>
  );
}) as any;

Typography.Title = Title;
Typography.Paragraph = Paragraph;

// 兼容导出
Typography.Link = BaseTypography.Link;
Typography.Text = BaseTypography.Text;

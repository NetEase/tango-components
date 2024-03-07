import { defineComponent } from '@music163/tango-boot';
import { Typography as AntTypography } from 'antd';
import React from 'react';
import { Placeholder } from './placeholder';

export const Title = defineComponent(AntTypography.Title, {
  name: 'Title',
});

export const Paragraph = defineComponent(AntTypography.Paragraph, {
  name: 'Paragraph',
});

type TypographyComponent = React.ForwardRefExoticComponent<
  any & React.RefAttributes<React.ReactElement>
> & {
  Title: typeof Title;
  Paragraph: typeof Paragraph;
  Link: typeof AntTypography.Link;
  Text: typeof AntTypography.Text;
};

export const Typography: TypographyComponent = defineComponent(AntTypography, {
  name: 'Typography',
  designerConfig: {
    defaultProps: {
      children: <Placeholder placeholder="添加标题或段落到这里" />,
    },
  },
}) as any;

Typography.Title = Title;
Typography.Paragraph = Paragraph;
Typography.Link = AntTypography.Link;
Typography.Text = AntTypography.Text;

import { Section } from '@music163/antd';

export default {
  title: 'antd/Section',
  component: Section,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = {
  args: {
    children: 'hello world',
  },
};

export const Empty = {
  args: {},
};

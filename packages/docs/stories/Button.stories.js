import { Button } from '@music163/antd';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'antd/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    type: 'primary',
    children: 'Button',
    tid: 'button123',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

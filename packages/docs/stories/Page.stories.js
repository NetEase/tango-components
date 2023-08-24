import { Page, Section } from '@music163/antd';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'antd/Page',
  component: Page,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export const Basic = () => {
  return (
    <Page title="page title">
      <Section title="Section Title">content</Section>
      <Section title="Section Title">content</Section>
    </Page>
  );
};

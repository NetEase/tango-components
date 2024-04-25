import { Column, Columns, Page, Section } from '@music163/antd';

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

export const Empty = {
  args: {},
};

export const Columns2 = () => {
  return (
    <Page title="2 columns">
      <Columns columnGap="12px">
        <Column bg="#FFF" colSpan={6} p={12}>
          1/2
        </Column>
        <Column bg="#FFF" colSpan={6} p={12}>
          1/2
        </Column>
      </Columns>
    </Page>
  );
};

export const Columns3 = () => {
  return (
    <Page title="3 columns">
      <Columns columnGap="12px">
        <Column bg="#FFF" colSpan={4} p={12}>
          1/3
        </Column>
        <Column bg="#FFF" colSpan={4} p={12}>
          1/3
        </Column>
        <Column bg="#FFF" colSpan={4} p={12}>
          1/3
        </Column>
      </Columns>
    </Page>
  );
};

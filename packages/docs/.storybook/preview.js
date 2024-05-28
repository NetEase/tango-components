import { useEffect } from 'react';
import '@music163/antd/lib/esm/index.less';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const globalTypes = {
  renderMode: {
    name: 'Render Mode',
    description: '渲染模式',
    defaultValue: 'Normal',
    toolbar: {
      icon: 'paintbrush',
      title: 'Mode',
      items: ['Normal', 'Design'],
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const mode = context.globals.renderMode;
    useEffect(() => {
      if (mode === 'Design') {
        window.__TANGO_DESIGNER__ = {
          version: '1.0.0',
        };
      } else {
        delete window.__TANGO_DESIGNER__;
      }
      return () => {
        delete window.__TANGO_DESIGNER__;
      };
    }, [mode]);

    return <Story />;
  },
];

export default preview;

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

window.__TANGO_DESIGNER__ = {
  version: '1.0.0',
};

export default preview;

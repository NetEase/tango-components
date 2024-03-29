import { ComponentPrototypeType } from '@music163/tango-helpers';

export const CodeBlock: ComponentPrototypeType = {
  name: 'CodeBlock',
  title: '代码块',
  package: '@music163/tango-mail',
  icon: 'icon-anniu',
  type: 'element',
  props: [
    {
      name: 'children',
      title: '内容',
      setter: 'textSetter',
    },
    {
      name: 'lineNumbers',
      title: '展示行号',
      setter: 'boolSetter',
    },
    {
      name: 'language',
      title: '语言',
      setter: 'textSetter',
      tip: '语言列表参考 Prism.js',
    },
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';

export const CodeBlock: ComponentPrototypeType = {
  name: 'CodeBlock',
  title: '代码块',
  package: '@music163/tango-mail',
  icon: 'icon-code',
  type: 'element',
  props: [
    {
      name: 'children',
      title: '内容',
      setter: 'textAreaSetter',
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
    {
      name: 'style',
      title: '样式',
      setter: 'codeSetter',
    },
  ],
};

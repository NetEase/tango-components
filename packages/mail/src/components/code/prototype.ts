import { ComponentPrototypeType } from '@music163/tango-helpers';

export const CodeBlock: ComponentPrototypeType = {
  name: 'CodeBlock',
  title: '代码块',
  package: '@music163/tango-mail',
  icon: 'icon-code',
  type: 'element',
  props: [
    {
      name: 'code',
      title: '代码',
      setter: 'codeSetter',
      initValue: "export foo = 'foo';",
    },
    {
      name: 'lineNumbers',
      title: '展示行号',
      setter: 'boolSetter',
      initValue: true,
    },
    {
      name: 'language',
      title: '语言',
      setter: 'textSetter',
      initValue: 'javascript',
      tip: '语言列表参考 Prism.js',
      docs: 'https://prismjs.com/#supported-languages',
    },
  ],
};

export const CodeInline: ComponentPrototypeType = {
  name: 'CodeInline',
  title: '代码',
  package: '@music163/tango-mail',
  icon: 'icon-code',
  type: 'element',
  props: [
    {
      name: 'children',
      title: '内容',
      setter: 'textAreaSetter',
      initValue: 'NetEase/tango',
    },
  ],
};

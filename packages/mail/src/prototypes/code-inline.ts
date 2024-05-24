import { ComponentPrototypeType } from '@music163/tango-helpers';

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

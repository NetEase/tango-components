import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Row: ComponentPrototypeType = {
  name: 'Row',
  title: '代码块',
  package: '@music163/tango-mail',
  icon: 'icon-anniu',
  type: 'container',
  hasChildren: true,
  childrenName: ['Column'],
  props: [
    {
      name: 'children',
      title: '文案',
      setter: 'textSetter',
    },
    {
      name: 'style',
      title: '样式',
      setter: 'codeSetter',
    },
  ],
};

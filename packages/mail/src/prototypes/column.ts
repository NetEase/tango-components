import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Column: ComponentPrototypeType = {
  name: 'Column',
  title: '代码块',
  package: '@music163/tango-mail',
  icon: 'icon-columns',
  type: 'container',
  hasChildren: true,
  siblingNames: ['Column'],
  props: [
    {
      name: 'style',
      title: '样式',
      setter: 'codeSetter',
    },
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Row: ComponentPrototypeType = {
  name: 'Row',
  title: '代码块',
  package: '@music163/tango-mail',
  icon: 'icon-anniu',
  type: 'container',
  hasChildren: true,
  childrenName: ['Column'],
  initChildren: '<Column></Column><Column></Column>',
  props: [
    {
      name: 'style',
      title: '样式',
      setter: 'codeSetter',
    },
  ],
};

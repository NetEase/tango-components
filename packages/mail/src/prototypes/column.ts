import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Column: ComponentPrototypeType = {
  name: 'Column',
  title: '列',
  package: '@music163/tango-mail',
  icon: 'icon-columns',
  type: 'container',
  hasChildren: true,
  siblingNames: ['Column'],
  childrenName: ['Section'],
  initChildren: '<Section></Section>',
  relatedImports: ['Section'],
  props: [
    {
      name: 'style',
      title: '样式',
      setter: 'codeSetter',
    },
    {
      name: 'className',
      title: '类名',
      setter: 'textSetter',
    },
  ],
};

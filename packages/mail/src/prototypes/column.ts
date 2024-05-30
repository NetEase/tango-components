import { ComponentPrototypeType } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../helpers';

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
    ...STYLE_PROPS,
  ],
};

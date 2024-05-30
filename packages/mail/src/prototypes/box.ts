import { ComponentPrototypeType } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../helpers';

export const Box: ComponentPrototypeType = {
  name: 'Box',
  title: '盒子',
  package: '@music163/tango-mail',
  icon: 'icon-box',
  type: 'element',
  hasChildren: true,
  props: [...STYLE_PROPS],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../helpers';

export const Section: ComponentPrototypeType = {
  name: 'Section',
  title: '区域',
  package: '@music163/tango-mail',
  icon: 'icon-section',
  type: 'container',
  hasChildren: true,
  props: [...STYLE_PROPS],
};

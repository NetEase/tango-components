import { ComponentPrototypeType } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../helpers';

export const Card: ComponentPrototypeType = {
  name: 'Card',
  title: '卡片',
  package: '@music163/tango-mail',
  icon: 'icon-card',
  type: 'element',
  hasChildren: true,
  props: [...STYLE_PROPS],
};

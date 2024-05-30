import { ComponentPrototypeType } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../helpers';

export const Container: ComponentPrototypeType = {
  name: 'Container',
  title: '容器',
  package: '@music163/tango-mail',
  icon: 'icon-container',
  help: '容器用于包裹内容',
  type: 'container',
  hasChildren: true,
  childrenName: ['Section', 'Hr'],
  props: [...STYLE_PROPS],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../helpers';

export const Box: ComponentPrototypeType = {
  name: 'Box',
  title: '盒子',
  package: '@music163/tango-mail',
  icon: 'icon-box',
  type: 'element',
  hasChildren: true,
  props: [
    {
      name: 'p',
      title: '内间距',
      setter: 'codeSetter',
    },
    {
      name: 'm',
      title: '外间距',
      setter: 'codeSetter',
    },
    {
      name: 'bg',
      title: '背景色',
      setter: 'colorSetter',
    },
    {
      name: 'color',
      title: '文本色',
      setter: 'colorSetter',
    },
    ...STYLE_PROPS,
  ],
};

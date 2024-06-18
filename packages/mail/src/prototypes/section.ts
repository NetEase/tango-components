import { ComponentPrototypeType } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../helpers';

export const Section: ComponentPrototypeType = {
  name: 'Section',
  title: '区域',
  package: '@music163/tango-mail',
  icon: 'icon-section',
  type: 'container',
  hasChildren: true,
  props: [
    {
      name: 'p',
      title: '内间距',
      setter: 'codeSetter',
      tip: '设置具体的带单位的间距值，例如 12px',
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

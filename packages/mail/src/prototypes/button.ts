import { ComponentPrototypeType } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../helpers';

export const Button: ComponentPrototypeType = {
  name: 'Button',
  title: '按钮',
  package: '@music163/tango-mail',
  icon: 'icon-anniu',
  help: '按钮用于触发一个操作',
  type: 'element',
  props: [
    {
      name: 'href',
      title: '跳转链接',
      setter: 'textSetter',
    },
    {
      name: 'children',
      title: '文案',
      setter: 'textSetter',
      initValue: '按钮',
    },
    ...STYLE_PROPS,
  ],
};

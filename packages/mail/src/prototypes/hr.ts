import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Hr: ComponentPrototypeType = {
  name: 'Hr',
  title: '分割线',
  package: '@music163/tango-mail',
  icon: 'icon-fengexian',
  type: 'element',
  props: [
    {
      name: 'style',
      title: '样式',
      setter: 'codeSetter',
    },
  ],
};

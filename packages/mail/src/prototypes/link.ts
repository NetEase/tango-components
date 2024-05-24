import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Link: ComponentPrototypeType = {
  name: 'Link',
  title: '链接',
  package: '@music163/tango-mail',
  icon: 'icon-link',
  type: 'element',
  props: [
    {
      name: 'children',
      title: '文案',
      setter: 'textSetter',
      initValue: 'Link'
    },
    {
      name: 'href',
      title: '链接地址',
      setter: 'textSetter',
    },
    {
      name: 'target',
      title: '目标',
      setter: 'textSetter',
    },
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

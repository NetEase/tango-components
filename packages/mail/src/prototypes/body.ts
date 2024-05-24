import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Body: ComponentPrototypeType = {
  name: 'Body',
  title: 'Body',
  package: '@music163/tango-mail',
  icon: 'icon-kuangjia',
  type: 'container',
  props: [
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

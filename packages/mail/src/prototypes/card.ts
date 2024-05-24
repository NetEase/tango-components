import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Card: ComponentPrototypeType = {
  name: 'Card',
  title: '卡片',
  package: '@music163/tango-mail',
  icon: 'icon-card',
  type: 'element',
  hasChildren: true,
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

import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Section: ComponentPrototypeType = {
  name: 'Section',
  title: '区域',
  package: '@music163/tango-mail',
  icon: 'icon-section',
  type: 'container',
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

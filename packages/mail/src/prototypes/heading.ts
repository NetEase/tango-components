import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Heading: ComponentPrototypeType = {
  name: 'Heading',
  title: '标题',
  package: '@music163/tango-mail',
  icon: 'icon-anniu',
  type: 'element',
  props: [
    {
      name: 'children',
      title: '文案',
      setter: 'textSetter',
      initValue: 'Heading',
    },
  ],
};

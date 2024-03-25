import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Image: ComponentPrototypeType = {
  name: 'Image',
  title: '图片',
  package: '@music163/tango-mail',
  icon: 'icon-image',
  type: 'element',
  props: [
    {
      name: 'src',
      title: '图片地址',
      setter: 'textSetter',
    },
    {
      name: 'width',
      title: '宽度',
      setter: 'textSetter',
    },
    {
      name: 'height',
      title: '高度',
      setter: 'textSetter',
    },
    {
      name: 'alt',
      title: '替代文案',
      setter: 'textSetter',
    },
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../../helpers';

export const Img: ComponentPrototypeType = {
  name: 'Img',
  title: '图片',
  package: '@music163/tango-mail',
  icon: 'icon-tupian',
  type: 'element',
  props: [
    {
      name: 'src',
      title: '图片地址',
      setter: 'textSetter',
      initValue: 'https://via.placeholder.com/200',
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
    ...STYLE_PROPS,
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const IFrame: ComponentPrototypeType = {
  name: 'IFrame',
  title: '网页框架',
  exportType: 'namedExport',
  icon: 'icon-iframe',
  type: 'element',
  package: '@music163/antd',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    {
      name: 'src',
      title: '网页地址',
      setter: 'textSetter',
      initValue: 'https://github.com',
    },
    {
      name: 'showBorder',
      title: '显示边框',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'visibility',
      title: '可见',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'width',
      title: '宽度',
      setter: 'numberSetter',
    },
    {
      name: 'height',
      title: '高度',
      setter: 'numberSetter',
    },
  ],
};

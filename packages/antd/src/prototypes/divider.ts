import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Divider: ComponentPrototypeType = {
  name: 'Divider',
  title: '分割线',
  package: '@music163/antd',
  icon: 'icon-fengexian',
  type: 'element',
  props: [
    ...StylePrototypes,
    { name: 'children', title: '文案', setter: 'textSetter' },
    {
      name: 'plain',
      title: '显示为普通正文样式',
      setter: 'boolSetter',
    },
    {
      name: 'dashed',
      title: '虚线',
      setter: 'boolSetter',
    },
    {
      name: 'orientation',
      title: '分割线标题的位置',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'left', value: 'left' },
          { label: 'right', value: 'right' },
          { label: 'center', value: 'center' },
        ],
      },
    },
    {
      name: 'type',
      title: '水平垂直类型',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'horizontal', value: 'horizontal' },
          { label: 'vertical', value: 'vertical' },
        ],
      },
    },
  ],
};

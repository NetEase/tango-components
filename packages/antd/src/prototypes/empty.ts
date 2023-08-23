import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Empty: ComponentPrototypeType = {
  name: 'Empty',
  title: '空状态',
  package: '@music163/antd',
  help: '空状态时的展示占位图',
  icon: 'icon-kongzhuangtai',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'description',
      title: '自定义描述内容',
      setter: 'expressionSetter',
    },
    {
      name: 'image',
      title: '设置显示图片',
      tip: '为 string 时表示自定义图片地址',
      setter: 'expressionSetter',
    },
    {
      name: 'imageStyle',
      group: 'style',
      title: '图片样式',
      setter: 'expressionSetter',
    },
  ],
};

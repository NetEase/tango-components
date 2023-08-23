import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Spin: ComponentPrototypeType = {
  name: 'Spin',
  title: '加载中',
  package: '@music163/antd',
  icon: 'icon-jiazaizhong',
  help: '用于页面和区块的加载中状态',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'children',
      title: '内容',
      setter: 'expressionSetter',
    },
    {
      name: 'spinning',
      title: '是否为加载中状态',
      setter: 'boolSetter',
    },
    {
      name: 'tip',
      title: '自定义描述文案',
      setter: 'textSetter',
    },
    {
      name: 'size',
      title: '组件大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'small', value: 'small' },
          { label: 'middle', value: 'middle' },
          { label: 'default', value: 'default' },
        ],
      },
    },
    {
      name: 'delay',
      title: '延迟',
      tip: '延迟显示加载效果的时间（防止闪烁）',
      setter: 'numberSetter',
    },
    { name: 'indicator', title: '加载指示符', setter: 'iconSetter' },
    {
      name: 'wrapperClassName',
      title: '包装器的类属性',
      setter: 'textSetter',
      group: 'style',
    },
  ],
};

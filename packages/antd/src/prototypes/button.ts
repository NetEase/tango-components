import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Button: ComponentPrototypeType = {
  title: '按钮',
  name: 'Button',
  exportType: 'namedExport',
  icon: 'icon-anniu',
  type: 'element',
  package: '@music163/antd',
  help: '按钮用于开始一个即时操作。',
  hasChildren: false,
  props: [
    {
      name: 'type',
      title: '类型',
      setter: 'pickerSetter',
      options: [
        { label: '默认', value: 'default' },
        { label: '主要', value: 'primary' },
        { label: '次要', value: 'secondary' },
        { label: '幽灵按钮', value: 'ghost' },
        { label: '虚线按钮', value: 'dashed' },
        { label: '链接按钮', value: 'link' },
      ],
    },
    {
      name: 'children',
      title: '文案',
      setter: 'textSetter',
      initValue: '按钮',
    },
    {
      name: 'icon',
      title: '图标',
      setter: 'iconSetter',
    },
    {
      name: 'isText',
      title: '文本按钮',
      setter: 'boolSetter',
    },
    {
      name: 'shape',
      title: '按钮形状',
      setter: 'choiceSetter',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Circle', value: 'circle' },
        { label: 'Round', value: 'round' },
      ],
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
    },
    ...StylePrototypes,
    {
      name: 'onClick',
      title: '点击回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'size',
      title: '尺寸',
      setter: 'choiceSetter',
      options: [
        { label: '小', value: 'small' },
        { label: '中', value: 'medium' },
        { label: '大', value: 'large' },
      ],
    },
    {
      name: 'htmlType',
      title: '原生按钮类型',
      setter: 'choiceSetter',
      options: [
        { label: 'button', value: 'button' },
        { label: 'submit', value: 'submit' },
        { label: 'reset', value: 'reset' },
      ],
    },
    {
      name: 'loading',
      title: '按钮载入状态',
      setter: 'boolSetter',
      defaultValue: false,
    },
    {
      name: 'ghost',
      title: '幽灵按钮',
      setter: 'boolSetter',
    },
    {
      name: 'danger',
      title: '危险按钮',
      setter: 'boolSetter',
    },
    {
      name: 'href',
      title: '点击跳转链接',
      setter: 'textSetter',
    },
    {
      name: 'target',
      title: '链接目标显示位置',
      setter: 'pickerSetter',
      options: [
        { label: '当前页面', value: '_self' },
        { label: '新页面', value: '_blank' },
      ],
    },
  ],
  rules: {},
};

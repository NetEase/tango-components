import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Tag: ComponentPrototypeType = {
  name: 'Tag',
  title: '标签',
  package: '@music163/antd',
  icon: 'icon-biaoqian',
  type: 'element',
  help: '进行标记和分类的小标签，用于标记事物的属性和维度或分类',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    {
      name: 'children',
      title: '文案',
      setter: 'textSetter',
      initValue: '普通标签',
    },
    {
      name: 'color',
      title: '标签色',
      setter: 'pickerSetter',
      options: [
        { label: '成功色', value: 'success' },
        { label: '处理中色', value: 'processing' },
        { label: '错误色', value: 'error' },
        { label: '警告色', value: 'warning' },
        { label: '默认色', value: 'default' },
      ],
      defaultValue: 'default',
    },
    { name: 'icon', title: '设置图标', setter: 'iconSetter' },
    {
      name: 'closable',
      title: '标签是否可以关闭',
      setter: 'boolSetter',
    },
    { name: 'closeIcon', title: '自定义关闭按钮', setter: 'iconSetter' },
    {
      name: 'visible',
      title: '是否显示标签',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'onClose',
      title: '关闭时的回调',
      tip: '可通过 e.preventDefault() 来阻止默认行为',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

export const CheckableTag: ComponentPrototypeType = {
  name: 'CheckableTag',
  title: '可选择标签',
  package: '@music163/antd',
  icon: 'icon-kexuanzebiaoqian',
  help: '可点击选中的 Tag 控件',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'children',
      title: '文案',
      setter: 'textSetter',
      initValue: '可选择标签',
    },
    {
      name: 'checked',
      title: '设置标签的选中状态',
      setter: 'boolSetter',
    },
    {
      name: 'onChange',
      title: '点击标签时触发的回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(checked)=>{}'],
    },
  ],
};

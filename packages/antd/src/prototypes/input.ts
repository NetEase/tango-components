import { ComponentPrototypeType } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from './common';

export const Input: ComponentPrototypeType = {
  name: 'Input',
  title: '输入框',
  icon: 'icon-shurukuang',
  type: 'element',
  package: '@music/tango-cms',
  help: '通过鼠标或键盘输入内容，是最基础的表单域的包装',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    ...InstancePrototypes,
    {
      name: 'placeholder',
      title: '占位符',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'defaultValue',
      title: '默认内容',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'value',
      title: '当前内容',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'maxLength',
      title: '最大长度',
      setter: 'numberSetter',
    },
    {
      name: 'size',
      title: '控件大小',
      tip: '控件大小。注：标准表单内的输入框大小限制为 large',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'default' },
          { label: '大', value: 'large' },
        ],
      },
    },
    {
      name: 'allowClear',
      title: '允许清除内容',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'showCount',
      title: '展示字数',
      setter: 'boolSetter',
    },
    {
      name: 'onChange',
      title: '内容变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['({target:{value}})=>{}'],
    },
    {
      name: 'bordered',
      title: '边框',
      setter: 'boolSetter',
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'addonAfter',
      title: '后置标签',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'addonBefore',
      title: '前置标签',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'prefix',
      title: '前缀图标',
      setter: 'iconSetter',
      group: 'advanced',
    },
    {
      name: 'suffix',
      title: '后缀图标',
      setter: 'iconSetter',
      group: 'advanced',
    },
    {
      name: 'type',
      title: '类型',
      tip: '声明 input 类型，同原生 input 标签的 type 属性',
      setter: 'textSetter',
      group: 'advanced',
    },
    {
      name: 'onPressEnter',
      title: '回车回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from './common';

export const InputNumber: ComponentPrototypeType = {
  name: 'InputNumber',
  title: '数字输入框',
  icon: 'icon-jishuqi',
  type: 'element',
  package: '@music163/antd',
  help: '通过鼠标或键盘，输入范围内的数值',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    ...InstancePrototypes,
    {
      name: 'value',
      title: '当前值',
      setter: 'numberSetter',
      group: 'basic',
    },
    {
      name: 'onChange',
      title: '变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(value)=>{}'],
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'formatter',
      title: '格式',
      tip: '指定输入框展示值的格式',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'defaultValue',
      title: '初始值',
      setter: 'numberSetter',
      group: 'basic',
    },
    {
      name: 'width',
      title: '组件宽度设置',
      setter: 'textSetter',
    },
    {
      name: 'size',
      title: '输入框大小',
      setterProps: {
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'large' },
        ],
      },
      setter: 'pickerSetter',
    },
    {
      name: 'controls',
      title: '增减按钮',
      setter: 'boolSetter',
    },
    {
      name: 'decimalSeparator',
      title: '小数点',
      setter: 'numberSetter',
    },
    {
      name: 'step',
      title: '步数',
      tip: '每次改变步数，可以为小数',
      setter: 'numberSetter',
    },
    {
      name: 'keyboard',
      title: '键盘快捷键',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'max',
      title: '最大值',
      setter: 'numberSetter',
    },
    {
      name: 'min',
      title: '最小值',
      setter: 'numberSetter',
    },
    {
      name: 'parser',
      title: '转换回数字的方式',
      tip: '指定从 formatter 里转换回数字的方式，和 formatter 搭配使用',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'precision',
      title: '数值精度',
      tip: '数值精度，配置 formatter 时会以 formatter 为准',
      setter: 'numberSetter',
    },
    {
      name: 'readOnly',
      title: '只读',
      setter: 'boolSetter',
    },
    {
      name: 'prefix',
      title: '前缀图标 ',
      setter: 'expressionSetter',
    },
    {
      name: 'addonAfter',
      title: '后置标签',
      setter: 'expressionSetter',
    },
    {
      name: 'addonBefore',
      title: '前置标签',
      setter: 'expressionSetter',
    },
    {
      name: 'autoFocus',
      title: '自动获取焦点',
      setter: 'boolSetter',
    },
    {
      name: 'bordered',
      title: '边框',
      setter: 'boolSetter',
    },
    {
      name: 'stringMode',
      title: '字符值模式',
      tip: '字符值模式，开启后支持高精度小数。同时 onChange 将返回 string 类型',
      setter: 'boolSetter',
    },
    { name: 'onPressEnter', title: '回车回调', setter: 'actionSetter', group: 'event' },
    {
      name: 'onStep',
      title: '点击步数回调',
      tip: '点击上下箭头的回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

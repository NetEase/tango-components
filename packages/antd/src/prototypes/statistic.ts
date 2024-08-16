import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Statistic: ComponentPrototypeType = {
  name: 'Statistic',
  title: '统计数值',
  package: '@music163/antd',
  icon: 'icon-tongjishuzhi',
  help: '展示统计数值组件，当需要突出某个或某组数字或展示带描述的统计类数据时使用',
  type: 'element',
  props: [
    ...StylePrototypes,
    { name: 'title', title: '数值的标题', setter: 'expressionSetter', initValue: '标题' },
    { name: 'value', title: '数值内容', setter: 'numberSetter', initValue: 100000 },
    { name: 'precision', title: '数值精度', setter: 'numberSetter', initValue: 2 },
    { name: 'prefix', title: '设置数值的前缀', setter: 'iconSetter' },
    { name: 'suffix', title: '设置数值的后缀', setter: 'iconSetter' },
    {
      name: 'decimalSeparator',
      title: '设置小数点',
      setter: 'textSetter',
    },
    {
      name: 'formatter',
      title: '自定义数值展示',
      setter: 'expressionSetter',
    },
    {
      name: 'groupSeparator',
      title: '设置千分位标识符',
      setter: 'textSetter',
    },
    {
      name: 'loading',
      title: '数值是否加载中',
      setter: 'boolSetter',
    },
    {
      name: 'valueStyle',
      group: 'style',
      title: '设置数值的样式',
      setter: 'expressionSetter',
      setterProps: {
        expressionType: 'cssObject'
      },
    },
  ],
};

export const StatisticCountdown: ComponentPrototypeType = {
  name: 'StatisticCountdown',
  title: '统计数值',
  package: '@music163/antd',
  icon: '',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'format',
      title: '格式化倒计时展示',
      setter: 'textSetter',
    },
    { name: 'prefix', title: '设置数值的前缀', setter: 'expressionSetter' },
    { name: 'suffix', title: '设置数值的后缀', setter: 'expressionSetter' },
    { name: 'title', title: '数值的标题', setter: 'expressionSetter' },
    { name: 'value', title: '数值内容', setter: 'numberSetter' },
    {
      name: 'valueStyle',
      group: 'style',
      title: '设置数值的样式',
      setter: 'expressionSetter',
      setterProps: {
        expressionType: 'cssObject'
      },
    },
    {
      name: 'onFinish',
      title: '倒计时完成时触发',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onChange',
      title: '倒计时时间变化时触发',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(value)=>{}'],
    },
  ],
};

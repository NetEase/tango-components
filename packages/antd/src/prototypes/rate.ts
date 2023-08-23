import { ComponentPrototypeType } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from './common';

export const Rate: ComponentPrototypeType = {
  name: 'Rate',
  title: '评分',
  package: '@music163/antd',
  help: '评分组件，用于对评价进行展示或对事物进行快速的评级操作',
  icon: 'icon-pingfen',
  type: 'element',
  props: [
    ...StylePrototypes,
    ...InstancePrototypes,
    {
      name: 'allowClear',
      title: '是否允许再次点击后清除',
      setter: 'boolSetter',
    },
    {
      name: 'allowHalf',
      title: '是否允许半选',
      setter: 'boolSetter',
    },
    {
      name: 'autoFocus',
      title: '自动获取焦点',
      setter: 'boolSetter',
    },
    {
      name: 'character',
      title: '自定义字符',
      setter: 'expressionSetter',
    },
    {
      name: 'count',
      title: 'star 总数',
      setter: 'numberSetter',
    },
    {
      name: 'defaultValue',
      title: '默认值',
      setter: 'numberSetter',
    },
    {
      name: 'disabled',
      title: '只读，无法进行交互',
      setter: 'boolSetter',
    },
    {
      name: 'tooltips',
      title: '自定义每项的提示信息',
      setter: 'expressionSetter',
    },
    { name: 'value', title: '当前分数', setter: 'numberSetter' },
    { name: 'onBlur', title: '失去焦点时的回调', setter: 'actionSetter', group: 'event' },
    {
      name: 'onChange',
      title: '选择时的回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(value)=>{}'],
    },
    { name: 'onFocus', title: '获取焦点时的回调', setter: 'actionSetter', group: 'event' },
    {
      name: 'onHoverChange',
      title: '鼠标经过时数值变化的回调',
      setter: 'actionSetter',
      group: 'event',
    },
    { name: 'onKeyDown', title: '按键回调', setter: 'actionSetter', group: 'event' },
  ],
};

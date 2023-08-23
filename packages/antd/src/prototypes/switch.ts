import { ComponentPrototypeType } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from './common';

export const Switch: ComponentPrototypeType = {
  name: 'Switch',
  title: '开关',
  icon: 'icon-kaiguan',
  type: 'element',
  package: '@music163/antd',
  help: '开关选择器，需要表示开关状态/两种状态之间的切换控件',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    ...InstancePrototypes,
    {
      name: 'checked',
      title: '是否选中',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'checkedChildren',
      title: '选中时的内容',
      setter: 'textSetter',
    },
    {
      name: 'unCheckedChildren',
      title: '非选中时的内容',
      setter: 'textSetter',
    },
    {
      name: 'loading',
      title: '加载中的开关',
      setter: 'boolSetter',
    },
    { name: 'disabled', title: '禁用', setter: 'boolSetter', group: 'basic' },
    {
      name: 'size',
      title: '开关大小',
      setterProps: {
        options: [
          { label: '默认', value: 'default' },
          { label: '小', value: 'small' },
        ],
      },
      setter: 'pickerSetter',
    },
    {
      name: 'autoFocus',
      title: '自动获取焦点',
      setter: 'boolSetter',
    },
    {
      name: 'defaultChecked',
      title: '初始选中',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'onChange',
      title: '变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(checked, event)=>{}'],
    },
    { name: 'onClick', title: '点击回调', setter: 'actionSetter', group: 'event' },
  ],
};

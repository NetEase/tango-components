import { ComponentPrototypeType } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from './common';

export const Checkbox: ComponentPrototypeType = {
  name: 'Checkbox',
  title: '多选框',
  icon: 'icon-duoxuankuang',
  type: 'element',
  package: '@music163/antd',
  help: '多选框，单独使用可以表示两种状态之间的切换，和 Switch 类似',
  hasChildren: true,
  initChildren: '选项1',
  props: [
    ...StylePrototypes,
    ...InstancePrototypes,
    {
      name: 'checked',
      title: '是否选中',
      setter: 'boolSetter',
    },
    {
      name: 'onChange',
      title: '变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['({target:value})=>{}'],
    },
    {
      name: 'disabled',
      title: '失效状态',
      setter: 'boolSetter',
    },
    {
      name: 'defaultChecked',
      title: '初始是否选中',
      setter: 'boolSetter',
    },
    {
      name: 'tooltip',
      title: '提示文案',
      setter: 'textSetter',
    },
    {
      name: 'autoFocus',
      title: '自动获取焦点',
      setter: 'boolSetter',
    },
    {
      name: 'indeterminate',
      title: 'indeterminate状态',
      tip: '在实现全选效果时，你可能会用到 indeterminate 属性，只负责样式控制',
      setter: 'boolSetter',
    },
    {
      name: 'isPreview',
      title: '是否开启预览',
      setter: 'boolSetter',
      group: 'basic',
    },
  ],
};

export const CheckboxGroup: ComponentPrototypeType = {
  name: 'CheckboxGroup',
  title: '多选框组',
  icon: 'icon-duoxuankuang',
  type: 'element',
  package: '@music163/antd',
  help: '多选框，在一组可选项中进行多项选择时',
  props: [
    ...StylePrototypes,
    ...InstancePrototypes,
    {
      name: 'value',
      title: '指定选中项',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'onChange',
      title: '变化时回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(checkedValue)=>{}'],
    },
    {
      name: 'options',
      title: '指定可选项',
      tip: '支持异步数据载入',
      initValue: [
        { label: '选项1', value: 'option1' },
        { label: '选项2', value: 'option2' },
        { label: '选项3', value: 'option3' },
      ],
      setter: 'optionSetter',
    },
    {
      name: 'name',
      title: 'name属性',
      tip: "CheckboxGroup 下所有 input[type='checkbox'] 的 name 属性",
      setter: 'textSetter',
      group: 'advanced',
    },
    {
      name: 'disabled',
      title: '整组失效',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'defaultValue',
      title: '默认选中项',
      setter: 'expressionSetter',
      initValue: ['option1'],
    },
    {
      name: 'showSelectAll',
      title: '是否显示全选中',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'fieldNames',
      title: '数据源的字段映射',
      tip: '当您传入的数据源的字段不是组件期望的字段时，可以使用该属性进行自定义映射',
      props: [
        {
          name: 'label',
          title: '标签',
          setter: 'textSetter',
        },
        {
          name: 'value',
          title: '值',
          setter: 'textSetter',
        },
      ],
      group: 'advanced',
    },
  ],
};

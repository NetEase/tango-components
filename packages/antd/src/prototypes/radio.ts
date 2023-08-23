import { ComponentPrototypeType } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from './common';

export const Radio: ComponentPrototypeType = {
  name: 'Radio',
  title: '单选框',
  icon: 'icon-danxuankuang',
  type: 'element',
  package: '@music163/antd',
  help: '单选框，用于在多个备选项中选中单个状态',
  hasChildren: true,
  initChildren: '单项1',
  props: [
    ...StylePrototypes,
    {
      name: 'autoFocus',
      title: '自动获取焦点',
      setter: 'boolSetter',
    },
    {
      name: 'checked',
      title: '选中',
      setter: 'boolSetter',
    },
    {
      name: 'tooltip',
      title: '提示文案',
      setter: 'textSetter',
    },
    {
      name: 'defaultChecked',
      title: '初始选中',
      setter: 'boolSetter',
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
    },
    {
      name: 'value',
      title: '值',
      tip: '根据 value 进行比较，判断是否选中',
      setter: 'expressionSetter',
    },
    {
      name: 'isPreview',
      title: '是否开启预览',
      setter: 'boolSetter',
    },
  ],
};

export const RadioGroup: ComponentPrototypeType = {
  name: 'RadioGroup',
  title: '单选框组',
  icon: 'icon-danxuankuang',
  type: 'element',
  package: '@music163/antd',
  hasChildren: true,
  help: '单选框组，一组互斥的 Radio 配合使用',
  props: [
    ...InstancePrototypes,
    {
      name: 'value',
      title: '选中的值',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'onChange',
      title: '选项变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['({target:{value}})=>{}'],
    },
    {
      name: 'direction',
      title: '显示方向',
      setter: 'choiceSetter',
      defaultValue: 'horizontal',
      options: [
        { label: '水平展示', value: 'horizontal' },
        { label: '垂直展示', value: 'vertical' },
      ],
    },
    {
      name: 'options',
      title: '数据源',
      tip: '支持异步数据载入',
      setter: 'optionSetter',
      initValue: [
        { label: '单项1', value: 'radio1' },
        { label: '单项2', value: 'radio2' },
        { label: '单项3', value: 'radio3' },
      ],
      group: 'basic',
    },
    {
      name: 'disabled',
      title: '禁选所有子单选器',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'defaultValue',
      title: '默认选中值',
      setter: 'textSetter',
      initValue: 'radio1',
      group: 'basic',
    },
    {
      name: 'isPreview',
      title: '是否开启预览',
      setter: 'boolSetter',
      group: 'basic',
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
    {
      name: 'optionType',
      title: '子元素类型',
      tip: '用于设置 Radio options 类型',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '默认', value: 'default' },
          { label: '按钮', value: 'button' },
        ],
      },
      group: 'advanced',
    },
    {
      name: 'size',
      title: '大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'large' },
        ],
      },
    },
    {
      name: 'buttonStyle',
      title: '风格样式',
      tip: 'RadioButton 的风格样式，目前有描边和填色两种风格',
      setter: 'pickerSetter',
      group: 'advanced',
      setterProps: {
        options: [
          { label: '虚线', value: 'outline' },
          { label: '实线', value: 'solid' },
        ],
      },
    },
    {
      name: 'name',
      title: 'name属性',
      tip: "RadioGroup 下所有 input[type='radio'] 的 name 属性",
      setter: 'textSetter',
      group: 'advanced',
    },
  ],
};

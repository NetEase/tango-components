import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Descriptions: ComponentPrototypeType = {
  name: 'Descriptions',
  title: '描述列表',
  package: '@music163/antd',
  icon: 'icon-miaoshu',
  help: '成组展示多个只读字段，常见于详情页的信息展示',
  type: 'element',
  hasChildren: true,
  childrenName: 'DescriptionItem',
  // initChildren: `<DescriptionItem label="标签" content="文本内容" /><DescriptionItem label="标签" content="文本内容" />`,
  relatedImports: ['DescriptionItem', 'Text'],
  props: [
    ...StylePrototypes,
    {
      name: 'title',
      title: '列表标题',
      setter: 'textSetter',
      initValue: '标题',
    },
    {
      name: 'bordered',
      title: '是否展示边框',
      setter: 'boolSetter',
    },
    // {
    //   name: 'colon',
    //   title: '是否展示冒号',
    //   setter: 'boolSetter',
    //   group: 'style',
    // },
    {
      name: 'column',
      title: '列数',
      setter: 'numberSetter',
      initValue: 3,
    },
    // {
    //   name: 'contentStyle',
    //   group: 'style',
    //   title: '自定义内容样式',
    //   setter: 'expressionSetter',
    // },
    {
      name: 'extra',
      title: '标题栏自定义操作区',
      setter: 'jsxSetter',
    },
    {
      name: 'labelAlign',
      title: '标签位置',
      setter: 'choiceSetter',
      options: [
        { label: '居左', value: 'left' },
        { label: '居右', value: 'right' },
      ],
    },
    { name: 'labelWidth', title: '标签宽度', setter: 'textSetter' },
    // {
    //   name: 'layout',
    //   title: '描述布局',
    //   setter: 'choiceSetter',
    //   setterProps: {
    //     options: [
    //       { label: '水平', value: 'horizontal' },
    //       { label: '垂直', value: 'vertical' },
    //     ],
    //   },
    // },
    {
      name: 'size',
      title: '设置列表的大小',
      tip: '仅在展示边框时有效',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: '默认', value: 'default' },
          { label: '中', value: 'middle' },
          { label: '小', value: 'small' },
        ],
      },
    },
    {
      name: 'labelStyle',
      title: '标签样式',
      setter: 'expressionSetter',
      group: 'style',
    },
    {
      name: 'contentStyle',
      title: '内容样式',
      setter: 'expressionSetter',
      group: 'style',
    },
  ],
};

export const DescriptionItem: ComponentPrototypeType = {
  name: 'DescriptionItem',
  title: '描述列表子项',
  package: '@music163/antd',
  icon: 'icon-miaoshuliebiaoitem',
  type: 'element',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    { name: 'label', title: '标签', setter: 'textSetter', initValue: '标签名' },
    {
      name: 'span',
      title: '占据列数',
      setter: 'numberSetter',
    },
    {
      name: 'type',
      title: '内容渲染类型',
      setter: 'pickerSetter',
      options: [
        { label: '文本', value: 'text' },
        { label: '链接', value: 'link' },
        { label: '图片', value: 'image' },
        { label: '日期时间', value: 'datetime' },
        { label: '数字', value: 'decimal' },
      ],
    },
    {
      name: 'content',
      title: '内容',
      setter: 'jsxSetter',
      setterProps: {
        showInput: true,
      },
    },
    {
      name: 'labelStyle',
      title: '标签样式',
      setter: 'expressionSetter',
      group: 'style',
    },
    {
      name: 'contentStyle',
      title: '内容样式',
      setter: 'expressionSetter',
      group: 'style',
    },
  ],
};

// 兼容旧版本
export const DescriptionsItem = DescriptionItem;

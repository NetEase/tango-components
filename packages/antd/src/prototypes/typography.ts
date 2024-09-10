import { IComponentPrototype } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Typography: IComponentPrototype = {
  name: 'Typography',
  title: '排版容器',
  package: '@music163/antd',
  icon: 'icon-wenzi',
  type: 'element',
  hasChildren: true,
  childrenName: ['Title', 'Paragraph'],
};

const commonTypographyProps: IComponentPrototype['props'] = [
  ...StylePrototypes,
  {
    name: 'type',
    title: '文本类型/文本颜色',
    setter: 'pickerSetter',
    options: [
      { label: 'secondary', value: 'secondary' },
      { label: 'success', value: 'success' },
      { label: 'warning', value: 'warning' },
      { label: 'danger', value: 'danger' },
    ],
  },
  {
    name: 'ellipsis',
    title: '自动溢出省略设置',
    props: [
      {
        name: 'expandable',
        title: '是否可展开',
        setter: 'boolSetter',
      },
      {
        name: 'rows',
        title: '最多展示行数',
        setter: 'numberSetter',
      },
    ],
  },
  {
    name: 'copyable',
    title: '可拷贝',
    props: [
      {
        name: 'text',
        title: '拷贝到剪贴板的文本',
        setter: 'textSetter',
      },
      {
        name: 'onCopy',
        title: '拷贝成功的回调函数',
        setter: 'eventSetter',
      },
    ],
  },
  {
    name: 'editable',
    title: '可编辑',
    props: [
      {
        name: 'editing',
        title: '是否显示编辑中',
        setter: 'boolSetter',
      },
      {
        name: 'onChange',
        title: '文本编辑时',
        setter: 'eventSetter',
      },
      {
        name: 'onCancel',
        title: '取消编辑时',
        setter: 'eventSetter',
      },
    ],
  },
  {
    name: 'disabled',
    title: '禁用文本',
    setter: 'boolSetter',
  },
  {
    name: 'delete',
    title: '删除线',
    setter: 'boolSetter',
  },
  {
    name: 'italic',
    title: '斜体',
    setter: 'boolSetter',
  },
  {
    name: 'underline',
    title: '下划线',
    setter: 'boolSetter',
  },
  {
    name: 'mark',
    title: '标记',
    setter: 'boolSetter',
  },
  {
    name: 'code',
    title: '代码',
    setter: 'boolSetter',
  },
  {
    name: 'onClick',
    title: '点击标题时',
    setter: 'eventSetter',
    group: 'event',
  },
];

export const Title: IComponentPrototype = {
  name: 'Title',
  title: '标题',
  package: '@music163/antd',
  icon: 'icon-header',
  help: '创建一个标题文本，可以展示不同级别的标题。',
  type: 'element',
  props: [
    {
      name: 'children',
      title: '文本',
      setter: 'textSetter',
      initValue: '这是标题文本内容',
    },
    {
      name: 'level',
      title: '标题级别',
      setter: 'pickerSetter',
      options: [
        { label: 'h1', value: '1' },
        { label: 'h2', value: '2' },
        { label: 'h3', value: '3' },
        { label: 'h4', value: '4' },
        { label: 'h5', value: '5' },
      ],
      tip: '数字越小，级别越大',
    },
    ...commonTypographyProps,
  ],
};

export const Paragraph: IComponentPrototype = {
  name: 'Paragraph',
  title: '段落',
  package: '@music163/antd',
  icon: 'icon-paragraph',
  help: '创建一个文本段落，提供默认的布局和样式设置。',
  type: 'element',
  props: [
    {
      name: 'children',
      title: '文本',
      setter: 'textSetter',
      initValue: '这是正文文本内容',
    },
    ...commonTypographyProps,
    {
      name: 'strong',
      title: '是否加粗',
      setter: 'boolSetter',
    },
  ],
};

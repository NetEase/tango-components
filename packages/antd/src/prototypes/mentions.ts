import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Mentions: ComponentPrototypeType = {
  name: 'Mentions',
  title: '提及',
  package: '@music163/antd',
  icon: 'icon-tiji',
  type: 'element',
  help: '提及组件，用于在输入中提及某人或某事，常用于发布、聊天或评论功能',
  hasChildren: true,
  childrenName: 'MentionsOption',
  initChildren: '<Option value="选项1">选项1</Option><Option value="选项2">选项2</Option>',
  relatedImports: ['MentionsOption'],
  props: [
    ...StylePrototypes,
    {
      name: 'autoFocus',
      title: '自动获得焦点',
      setter: 'boolSetter',
    },
    {
      name: 'autoSize',
      title: '自适应内容高度',
      setter: 'boolSetter',
    },
    { name: 'defaultValue', title: '默认值', setter: 'textSetter' },
    {
      name: 'filterOption',
      title: '自定义过滤逻辑',
      setter: 'expressionSetter',
    },
    {
      name: 'getPopupContainer',
      title: '建议框挂载的 HTML 节点',
      setter: 'expressionSetter',
    },
    {
      name: 'notFoundContent',
      title: '下拉列表空时显示的内容',
      setter: 'expressionSetter',
    },
    {
      name: 'placement',
      title: '弹出层展示位置',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'top', value: 'top' },
          { label: 'bottom', value: 'bottom' },
        ],
      },
    },
    {
      name: 'prefix',
      title: '触发关键字',
      setter: 'textSetter',
    },
    {
      name: 'split',
      title: '选中项前后分隔符',
      setter: 'textSetter',
    },
    {
      name: 'validateSearch',
      title: '自定义触发验证逻辑',
      setter: 'expressionSetter',
    },
    { name: 'value', title: '设置值', setter: 'textSetter' },
    { name: 'onBlur', title: '失去焦点时触发', setter: 'actionSetter', group: 'event' },
    {
      name: 'onChange',
      title: '值改变时触发',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(value=>{}'],
    },
    { name: 'onFocus', title: '获得焦点时触发', setter: 'actionSetter', group: 'event' },
    { name: 'onResize', title: 'resize 回调', setter: 'actionSetter', group: 'event' },
    { name: 'onSearch', title: '搜索时触发', setter: 'actionSetter', group: 'event' },
    {
      name: 'onSelect',
      title: '选择选项时触发',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

export const MentionsOption: ComponentPrototypeType = {
  name: 'MentionsOption',
  title: '提及',
  package: '@music163/antd',
  icon: 'icon-tijioption',
  type: 'element',
  props: [
    ...StylePrototypes,
    { name: 'children', title: '选项内容', setter: 'expressionSetter' },
    { name: 'value', title: '选择时填充的值', setter: 'textSetter' },
  ],
};

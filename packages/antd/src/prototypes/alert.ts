import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Alert: ComponentPrototypeType = {
  name: 'Alert',
  title: '警告提示',
  package: '@music163/antd',
  icon: 'icon-xinxitishi',
  help: '警告提示，展现需要关注的信息',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'message',
      title: '自定义错误标题',
      tip: '自定义错误标题，如果未指定会展示原生报错信息',
      setter: 'textSetter',
      initValue: '警告提示语',
    },
    {
      name: 'showIcon',
      title: '显示辅助图标',
      setter: 'boolSetter',
    },
    {
      name: 'type',
      title: '指定警告提示的样式',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'success', value: 'success' },
          { label: 'info', value: 'info' },
          { label: 'warning', value: 'warning' },
          { label: 'error', value: 'error' },
        ],
      },
    },
    { name: 'action', title: '自定义操作项', setter: 'expressionSetter' },
    {
      name: 'afterClose',
      title: '关闭后的回调函数',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'banner',
      title: '用作顶部公告',
      setter: 'boolSetter',
    },
    {
      name: 'closable',
      title: '显示关闭按钮',
      setter: 'boolSetter',
    },
    {
      name: 'closeText',
      title: '自定义关闭按钮',
      setter: 'expressionSetter',
    },
    {
      name: 'description',
      title: '警告提示的辅助性文字介绍',
      setter: 'expressionSetter',
    },
    {
      name: 'icon',
      title: '自定义图标',
      tip: 'showIcon 为 true 时有效',
      setter: 'expressionSetter',
    },
    {
      name: 'onClose',
      title: '关闭时触发的回调函数',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

export const AlertErrorBoundary: ComponentPrototypeType = {
  name: 'AlertErrorBoundary',
  title: '警告提示',
  package: '@music163/antd',
  icon: '',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'description',
      title: '自定义错误内容',
      tip: '自定义错误内容，如果未指定会展示报错堆栈',
      setter: 'expressionSetter',
    },
    {
      name: 'message',
      title: '自定义错误标题',
      tip: '自定义错误标题，如果未指定会展示原生报错信息',
      setter: 'expressionSetter',
      initValue: '警告提示语',
    },
  ],
};

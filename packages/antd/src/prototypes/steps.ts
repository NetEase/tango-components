import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Steps: ComponentPrototypeType = {
  name: 'Steps',
  title: '步骤条',
  package: '@music163/antd',
  icon: 'icon-buzhoutiao',
  type: 'element',
  help: '引导用户按照流程完成任务的导航条，当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。',
  hasChildren: true,
  childrenName: 'StepsItem',
  initChildren: '<StepsItem title="步骤1" /><StepsItem title="步骤2" />',
  relatedImports: ['StepsItem'],
  props: [
    ...StylePrototypes,
    {
      name: 'initial',
      title: '默认起始序号',
      tip: '0,1,2 ...',
      setter: 'numberSetter',
    },
    {
      name: 'current',
      title: '当前步骤序号',
      tip: '0,1,2 ...',
      setter: 'numberSetter',
    },
    {
      name: 'status',
      title: '当前步骤状态',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'wait', value: 'wait' },
          { label: 'process', value: 'process' },
          { label: 'finish', value: 'finish' },
          { label: 'error', value: 'error' },
        ],
      },
    },
    {
      name: 'percent',
      title: '当前步骤条进度',
      setter: 'numberSetter',
    },
    {
      name: 'size',
      title: '步骤条大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'small', value: 'small' },
          { label: 'default', value: 'default' },
        ],
      },
    },
    {
      name: 'progressDot',
      title: '点状步骤条',
      setter: 'boolSetter',
    },
    {
      name: 'direction',
      title: '步骤条方向',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'vertical', value: 'vertical' },
          { label: 'horizontal', value: 'horizontal' },
        ],
      },
    },
    {
      name: 'type',
      title: '步骤条类型',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'default', value: 'default' },
          { label: 'navigation', value: 'navigation' },
        ],
      },
    },
    {
      name: 'labelPlacement',
      title: '标签放置位置',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'vertical', value: 'vertical' },
          { label: 'horizontal', value: 'horizontal' },
        ],
      },
      group: 'advanced',
    },
    {
      name: 'responsive',
      title: '响应式',
      tip: '当屏幕宽度小于 532px 时自动变为垂直模式',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'onChange',
      title: '切换步骤时触发事件',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(current)=>{}'],
    },
  ],
};

export const StepsItem: ComponentPrototypeType = {
  name: 'StepsItem',
  title: '步骤条',
  package: '@music163/antd',
  icon: '',
  type: 'element',
  props: [
    ...StylePrototypes,
    { name: 'title', title: '标题', setter: 'textSetter', initValue: '步骤' },
    { name: 'subTitle', title: '子标题', setter: 'expressionSetter' },
    {
      name: 'description',
      title: '步骤的详情描述',
      setter: 'expressionSetter',
    },
    {
      name: 'status',
      title: '指定状态',
      tip: '当不配置该属性时，会使用 Steps 的 current 来自动指定状态。',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'wait', value: 'wait' },
          { label: 'process', value: 'process' },
          { label: 'finish', value: 'finish' },
          { label: 'error', value: 'error' },
        ],
      },
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
    },
    {
      name: 'icon',
      title: '步骤图标',
      setter: 'iconSetter',
      group: 'advanced',
    },
  ],
};

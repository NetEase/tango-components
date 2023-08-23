import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Progress: ComponentPrototypeType = {
  name: 'Progress',
  title: '进度条',
  package: '@music163/antd',
  icon: 'icon-jindutiao',
  help: '展示操作的当前进度控件，在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态',
  type: 'element',
  props: [
    ...StylePrototypes,
    { name: 'percent', title: '百分比', setter: 'numberSetter', initValue: 70 },
    {
      name: 'showInfo',
      title: '显示进度数值或状态图标',
      setter: 'boolSetter',
      initValue: true,
    },
    {
      name: 'status',
      title: '状态',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'success', value: 'success' },
          { label: 'exception', value: 'exception' },
          { label: 'normal', value: 'normal' },
          { label: 'active', value: 'active' },
        ],
      },
    },
    {
      name: 'type',
      title: '类型',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'line', value: 'line' },
          { label: 'circle', value: 'circle' },
          { label: 'dashboard', value: 'dashboard' },
        ],
      },
    },
    {
      name: 'strokeLinecap',
      title: '进度条的样式',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'round', value: 'round' },
          { label: 'square', value: 'square' },
        ],
      },
    },
    { name: 'strokeColor', title: '进度条的色彩', setter: 'colorSetter' },
    {
      name: 'format',
      title: '内容的模板函数',
      setter: 'expressionSetter',
    },
    {
      name: 'success',
      title: '成功进度条相关配置',
      setter: 'expressionSetter',
    },
    {
      name: 'trailColor',
      title: '未完成的分段的颜色',
      setter: 'colorSetter',
    },
  ],
};

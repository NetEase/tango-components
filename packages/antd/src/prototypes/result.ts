import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Result: ComponentPrototypeType = {
  name: 'Result',
  title: '结果',
  package: '@music163/antd',
  icon: 'icon-jieguo',
  help: '用于反馈一系列操作任务的处理结果',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'status',
      title: '结果状态',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '成功', value: 'success' },
          { label: '错误', value: 'error' },
          { label: '信息', value: 'info' },
          { label: '警告', value: 'warning' },
          { label: '404', value: '404' },
          { label: '403', value: '403' },
          { label: '500', value: '500' },
        ],
      },
      initValue: 'info',
    },
    { name: 'title', title: '标题', setter: 'textSetter', initValue: '结果' },
    {
      name: 'subTitle',
      title: '副标题',
      setter: 'textSetter',
      initValue: '结果的原因描述',
    },
    { name: 'icon', title: '自定义图标', setter: 'iconSetter' },
    { name: 'extra', title: '操作区', setter: 'expressionSetter' },
  ],
};

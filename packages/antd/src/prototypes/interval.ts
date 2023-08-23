import { ComponentPrototypeType } from '@music163/tango-helpers';
import { InstancePrototypes } from './common';

export const Interval: ComponentPrototypeType = {
  title: '周期调度器',
  name: 'Interval',
  exportType: 'namedExport',
  icon: 'icon-time-range',
  type: 'element',
  package: '@music163/antd',
  help: '用于周期性的执行某一个动作。',
  hasChildren: false,
  props: [
    ...InstancePrototypes,
    {
      name: 'defaultIsActive',
      title: '默认是否启动',
      setter: 'boolSetter',
    },
    {
      name: 'delay',
      title: '每次间隔（毫秒）',
      setter: 'numberSetter',
      defaultValue: 1000,
    },
    {
      name: 'callback',
      title: '执行的回调函数',
      setter: 'actionSetter',
    },
  ],
};

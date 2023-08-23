import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Toolbar: ComponentPrototypeType = {
  name: 'Toolbar',
  title: '工具栏',
  icon: 'icon-toolbar',
  type: 'element',
  package: '@music163/antd',
  hasChildren: true,
  props: [
    ...StylePrototypes,
    {
      name: 'leftActions',
      title: '左侧行动组配置',
      setter: 'actionListSetter',
      initValue: [
        { key: 'action1', label: 'Left Action 1' },
        { key: 'action2', label: 'Left Action 2' },
      ],
    },
    {
      name: 'rightActions',
      title: '右侧行动组配置',
      setter: 'actionListSetter',
    },
    {
      name: 'onAction',
      title: '行动组按钮点击',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

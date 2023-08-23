import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const EditActions: ComponentPrototypeType = {
  name: 'EditActions',
  title: '编辑按钮组',
  package: '@music163/antd',
  help: '当需要对表格一行数据、页面局部区域内表单进行编辑、保存时使用',
  icon: 'icon-anniu',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'editable',
      title: '受控的可编辑态',
      setter: 'boolSetter',
    },
    {
      name: 'defaultEditable',
      title: '默认的可编辑态',
      setter: 'boolSetter',
    },
    {
      name: 'editText',
      title: '编辑文案',
      setter: 'textSetter',
      defaultValue: '编辑',
    },
    {
      name: 'shape',
      title: '按钮外观显示',
      options: [
        { label: '按钮', value: 'button' },
        { label: '文本', value: 'text' },
      ],
      defaultValue: 'text',
      setter: 'choiceSetter',
    },
    {
      name: 'saveConfirmContent',
      title: '编辑按钮确认内容',
      setter: 'textSetter',
    },
    {
      name: 'onEdit',
      title: '编辑按钮动作回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onSave',
      title: '保存按钮动作回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onCancel',
      title: '取消按钮动作回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

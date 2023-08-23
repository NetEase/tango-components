import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Tabs: ComponentPrototypeType = {
  title: '选项卡',
  name: 'Tabs',
  exportType: 'namedExport',
  icon: 'icon-xuanxiangka',
  type: 'container',
  package: '@music163/antd',
  help: '提供平级的区域将大块内容进行收纳和展现，保持界面整洁',
  hasChildren: true,
  initChildren:
    '<TabPane key="1" tab="选项卡1"></TabPane><TabPane key="2" tab="选项卡2"></TabPane>',
  childrenName: 'TabPane',
  relatedImports: ['TabPane'],
  props: [
    ...StylePrototypes,
    {
      name: 'defaultActiveKey',
      title: '默认选中的面板',
      setter: 'textSetter',
    },
    {
      name: 'centered',
      title: '标签是否居中',
      setter: 'boolSetter',
    },
    {
      name: 'type',
      title: '选项卡外观',
      setter: 'pickerSetter',
      options: [
        { label: '基本', value: 'line' },
        { label: '卡片', value: 'card' },
        { label: '可编辑卡片', value: 'editable-card' },
        { label: '胶囊', value: 'capsule' },
        { label: '文本', value: 'text' },
      ],
    },
    {
      name: 'tabPosition',
      title: '选项卡位置',
      setter: 'choiceSetter',
      options: [
        { label: '上', value: 'top' },
        { label: '右', value: 'right' },
        { label: '下', value: 'bottom' },
        { label: '左', value: 'left' },
      ],
    },
    {
      name: 'onChange',
      title: '当面板切换时',
      setter: 'expressionSetter',
      group: 'event',
      autoCompleteOptions: ['(activeKey)=>{}'],
    },
    {
      name: 'tabBarExtraContent',
      title: 'tab bar 上额外的元素',
      setter: 'jsxSetter',
      group: 'advanced',
    },
    {
      name: 'destroyInactiveTabPane',
      title: '被隐藏时是否销毁 DOM 结构',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'tabBarGutter',
      title: 'tabs 之间的间隙',
      setter: 'numberSetter',
      group: 'advanced',
    },
  ],
};

export const TabPane: ComponentPrototypeType = {
  title: '选项卡面板',
  name: 'TabPane',
  exportType: 'namedExport',
  icon: 'icon-xuanxiangka',
  type: 'container',
  package: '@music163/antd',
  hasChildren: true,
  props: [
    ...StylePrototypes,
    { name: 'key', title: '选项卡标识', setter: 'textSetter', autoInitValue: true, },
    { name: 'tab', title: '选项卡标题', setter: 'textSetter', initValue: '选项卡' },
    {
      name: 'forceRender',
      title: '被隐藏时是否渲染 DOM 结构',
      setter: 'boolSetter',
    },
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Collapse: ComponentPrototypeType = {
  name: 'Collapse',
  title: '折叠面板',
  package: '@music163/antd',
  icon: 'icon-zhediemianban',
  help: '可以折叠/展开的内容区域，对复杂区域进行分组和隐藏，保持页面的整洁',
  type: 'element',
  hasChildren: true,
  childrenName: 'CollapsePanel',
  initChildren: `<CollapsePanel  header="panel1" key="1"><Placeholder text="放置替换" /></CollapsePanel><CollapsePanel header="panel2" key="2"><Placeholder text="放置替换" /></CollapsePanel><CollapsePanel header="panel3" key="3"><Placeholder text="放置替换" /></CollapsePanel>`,
  relatedImports: ['Placeholder', 'CollapsePanel'],
  props: [
    ...StylePrototypes,
    {
      name: 'accordion',
      title: '手风琴模式',
      setter: 'boolSetter',
    },
    {
      name: 'activeKey',
      title: '当前激活 tab 面板的 key',
      setter: 'textSetter',
    },
    {
      name: 'bordered',
      title: '带边框风格的折叠面板',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'collapsible',
      title: '可折叠',
      tip: '所有子面板是否可折叠或指定可折叠触发区域',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'header', value: 'header' },
          { label: 'disabled', value: 'disabled' },
        ],
      },
    },
    {
      name: 'defaultActiveKey',
      title: '初始化选中面板的 key',
      setter: 'textSetter',
    },
    {
      name: 'destroyInactivePanel',
      title: '销毁折叠隐藏的面板',
      setter: 'boolSetter',
    },
    {
      name: 'expandIcon',
      title: '自定义切换图标',
      setter: 'expressionSetter',
      tip: '例：{() => <Icon type="AccountBookOutlined" />}',
    },
    {
      name: 'expandIconPosition',
      title: '设置图标位置',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'start', value: 'start' },
          { label: 'end', value: 'end' },
        ],
      },
    },
    {
      name: 'ghost',
      title: '透明且无边框',
      setter: 'boolSetter',
    },
    {
      name: 'onChange',
      title: '切换面板的回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(key)=>{}'],
    },
  ],
};

export const CollapsePanel: ComponentPrototypeType = {
  name: 'CollapsePanel',
  title: '折叠面板Panel',
  package: '@music163/antd',
  icon: 'icon-zhediemianban',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'collapsible',
      title: '可折叠',
      tip: '是否可折叠或指定可折叠触发区域',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'header', value: 'header' },
          { label: 'disabled', value: 'disabled' },
        ],
      },
    },
    {
      name: 'extra',
      title: '面板右上角的内容',
      setter: 'expressionSetter',
    },
    {
      name: 'forceRender',
      title: '被隐藏时是否渲染 DOM 结构',
      setter: 'boolSetter',
      group: 'advanced',
    },
    { name: 'header', title: '面板头内容', setter: 'expressionSetter' },
    { name: 'key', title: 'activeKey', setter: 'textSetter' },
    {
      name: 'showArrow',
      title: '是否展示当前面板上的箭头',
      setter: 'boolSetter',
    },
  ],
};

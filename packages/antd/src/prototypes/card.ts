import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';
import { Tabs as TabsPrototype } from './tabs';
import { omitProps } from '../helpers';

export const Card: ComponentPrototypeType = {
  name: 'Card',
  title: '卡片',
  package: '@music163/antd',
  icon: 'icon-card',
  help: '最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面',
  type: 'element',
  hasChildren: true,
  initChildren: `<Placeholder text="放置替换" />`,
  relatedImports: ['Placeholder'],
  props: [
    ...StylePrototypes,
    { name: 'title', title: '卡片标题', setter: 'expressionSetter', initValue: '标题' },
    {
      name: 'extra',
      title: '卡片的操作区域',
      tip: '位于卡片右上角',
      setter: 'jsxSetter',
    },
    {
      name: 'type',
      title: '卡片类型',
      tip: '可设置为 inner 或 不设置',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '不设置', value: null },
          { label: 'inner', value: 'inner' },
        ],
      },
    },
    {
      name: 'actions',
      title: '卡片操作组',
      tip: '位置在卡片底部，提供 JSXElement 数组',
      setter: 'expressionSetter',
    },
    {
      name: 'activeTabKey',
      title: '当前激活页签的key',
      setter: 'textSetter',
    },
    {
      name: 'bodyStyle',
      group: 'style',
      title: '内容区域自定义样式',
      setter: 'expressionSetter',
    },
    {
      name: 'bordered',
      title: '是否有边框',
      setter: 'boolSetter',
    },
    { name: 'cover', title: '卡片封面', setter: 'jsxSetter' },
    {
      name: 'defaultActiveTabKey',
      title: '初始化选中页签的key',
      tip: '如果没有设置 activeTabKey',
      setter: 'textSetter',
    },
    {
      name: 'headStyle',
      group: 'style',
      title: '自定义标题区域样式',
      setter: 'expressionSetter',
    },
    {
      name: 'hoverable',
      title: '鼠标移过时可浮起',
      setter: 'boolSetter',
    },
    {
      name: 'loading',
      title: '当卡片内容还在加载中时',
      tip: '可以用 loading 展示一个占位',
      setter: 'boolSetter',
    },
    {
      name: 'size',
      title: '尺寸',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'default', value: 'default' },
          { label: 'small', value: 'small' },
        ],
      },
    },
    {
      name: 'tabBarExtraContent',
      title: 'tab bar 上额外的元素',
      setter: 'jsxSetter',
    },
    {
      name: 'tabList',
      title: '页签标题列表',
      setter: 'optionSetter',
      // disableVariableSetter: true,
      // group: 'advanced',
      setterProps: {
        getKey: (item: any) => item.key,
        renderItem: (item: any) => item.tab,
        listItemFormFields: [
          { label: '标签名', name: 'tab', required: true },
          { label: 'key', name: 'key', required: true },
        ],
      },
    },
    {
      name: 'tabProps',
      title: '选项卡属性',
      props: omitProps(TabsPrototype.props, ['tabPosition']),
    },
    { name: 'onTabChange', title: '页签切换的回调', setter: 'actionSetter', group: 'event' },
  ],
};

export const CardGrid: ComponentPrototypeType = {
  name: 'CardGrid',
  title: '卡片Grid',
  package: '@music163/antd',
  icon: 'icon-kapiangrid',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'hoverable',
      title: '鼠标移过时可浮起',
      setter: 'boolSetter',
    },
  ],
};

export const CardMeta: ComponentPrototypeType = {
  name: 'CardMeta',
  title: '卡片',
  package: '@music163/antd',
  icon: '',
  type: 'element',
  props: [
    ...StylePrototypes,
    { name: 'avatar', title: '头像/图标', setter: 'expressionSetter' },
    { name: 'description', title: '描述内容', setter: 'expressionSetter' },
    { name: 'title', title: '标题内容', setter: 'expressionSetter' },
  ],
};

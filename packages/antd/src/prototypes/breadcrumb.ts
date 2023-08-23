import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Breadcrumb: ComponentPrototypeType = {
  name: 'Breadcrumb',
  title: '面包屑',
  package: '@music163/antd',
  icon: 'icon-mianbaoxie',
  type: 'element',
  help: '显示当前页面在系统层级结构中的位置，并能向上返回',
  hasChildren: true,
  childrenName: 'BreadcrumbItem',
  initChildren: '<BreadcrumbItem children="节点名称 1" /><BreadcrumbItem children="节点名称 2" />',
  relatedImports: ['BreadcrumbItem'],
  props: [
    ...StylePrototypes,
    {
      name: 'separator',
      title: '分隔符自定义',
      setter: 'expressionSetter',
    },
    {
      name: 'itemRender',
      title: '自定义链接函数',
      tip: '自定义链接函数，和 react-router 配置使用',
      setter: 'expressionSetter',
    },
    { name: 'params', title: '路由的参数', setter: 'expressionSetter' },
    { name: 'routes', title: 'router 的路由栈信息', setter: 'expressionSetter' },
  ],
};

export const BreadcrumbItem: ComponentPrototypeType = {
  name: 'BreadcrumbItem',
  title: '单个面包屑',
  package: '@music163/antd',
  icon: '',
  type: 'element',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    { name: 'children', title: '文案', setter: 'textSetter', initValue: '节点名称' },
    { name: 'href', title: '链接的目的地', setter: 'textSetter' },
    {
      name: 'overlay',
      title: '下拉菜单的内容',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'dropdownProps',
      title: '弹出下拉菜单的配置',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    { name: 'onClick', title: '单击事件', setter: 'actionSetter', group: 'event' },
  ],
};

export const BreadcrumbSeparator: ComponentPrototypeType = {
  name: 'BreadcrumbSeparator',
  title: '面包屑',
  package: '@music163/antd',
  icon: '',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'children',
      title: '要显示的分隔符',
      setter: 'expressionSetter',
    },
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Menu: ComponentPrototypeType = {
  name: 'Menu',
  title: '导航菜单',
  package: '@music163/antd',
  icon: 'icon-daohangcaidan',
  type: 'element',
  help: '为页面和功能提供导航的菜单列表，一般分为顶部导航和侧边导航',
  hasChildren: true,
  childrenName: 'MenuItem',
  initChildren:
    '<MenuItem key="item1" children="菜单项1" /><MenuItem key="item1" children="菜单项2" />',
  relatedImports: ['MenuItem'],
  props: [
    ...StylePrototypes,
    {
      name: 'defaultOpenKeys',
      title: '默认展开项key',
      setter: 'expressionSetter',
    },
    {
      name: 'defaultSelectedKeys',
      title: '默认选中项key',
      setter: 'expressionSetter',
    },
    { name: 'expandIcon', title: '自定义展开图标', setter: 'iconSetter' },
    {
      name: 'forceSubMenuRender',
      title: '强制渲染',
      tip: '在子菜单展示之前就渲染进 DOM',
      setter: 'boolSetter',
    },
    {
      name: 'inlineCollapsed',
      title: 'inline菜单收起状态',
      setter: 'boolSetter',
    },
    {
      name: 'inlineIndent',
      title: 'inline菜单缩进宽度',
      setter: 'numberSetter',
    },
    {
      name: 'mode',
      title: '菜单类型',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'vertical', value: 'vertical' },
          { label: 'horizontal', value: 'horizontal' },
          { label: 'inline', value: 'inline' },
        ],
      },
    },
    {
      name: 'multiple',
      title: '允许多选',
      setter: 'boolSetter',
    },
    {
      name: 'openKeys',
      title: '当前展开菜单项',
      setter: 'expressionSetter',
    },
    {
      name: 'overflowedIndicator',
      title: '折叠图标',
      setter: 'expressionSetter',
    },
    {
      name: 'selectable',
      title: '允许选中',
      setter: 'boolSetter',
    },
    {
      name: 'selectedKeys',
      title: '当前选中菜单key',
      setter: 'expressionSetter',
    },
    {
      name: 'subMenuCloseDelay',
      title: '关闭延时',
      tip: '用户鼠标离开子菜单后关闭延时，单位：秒',
      setter: 'numberSetter',
    },
    {
      name: 'subMenuOpenDelay',
      title: '开启延时',
      tip: '用户鼠标进入子菜单后开启延时，单位：秒',
      setter: 'numberSetter',
    },
    {
      name: 'theme',
      title: '主题颜色',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'light', value: 'light' },
          { label: 'dark', value: 'dark' },
        ],
      },
    },
    {
      name: 'triggerSubMenuAction',
      title: '菜单展开/关闭的触发行为',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'hover', value: 'hover' },
          { label: 'click', value: 'click' },
        ],
      },
    },
    {
      name: 'onClick',
      title: '点击事件',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onDeselect',
      title: '取消选中事件',
      tip: '仅在 multiple 生效',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onOpenChange',
      title: '展开/关闭事件',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onSelect',
      title: '选中事件',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

export const MenuItem: ComponentPrototypeType = {
  name: 'MenuItem',
  title: '导航菜单',
  package: '@music163/antd',
  icon: '',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'danger',
      title: '展示错误状态样式',
      setter: 'boolSetter',
    },
    {
      name: 'disabled',
      title: '是否禁用',
      setter: 'boolSetter',
    },
    { name: 'icon', title: '菜单图标', setter: 'iconSetter' },
    { name: 'key', title: 'item key', setter: 'textSetter' },
    {
      name: 'title',
      title: '收缩悬时浮标题',
      setter: 'textSetter',
    },
  ],
};

export const MenuSubMenu: ComponentPrototypeType = {
  name: 'MenuSubMenu',
  title: '导航菜单',
  package: '@music163/antd',
  icon: '',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'children',
      title: '子菜单的菜单项',
      setter: 'expressionSetter',
    },
    {
      name: 'disabled',
      title: '是否禁用',
      setter: 'boolSetter',
    },
    { name: 'icon', title: '菜单图标', setter: 'expressionSetter' },
    { name: 'key', title: '唯一标志', setter: 'textSetter' },
    {
      name: 'popupClassName',
      title: '子菜单样式',
      tip: 'mode="inline" 时无效',
      setter: 'textSetter',
    },
    {
      name: 'popupOffset',
      title: '子菜单偏移量',
      tip: 'mode="inline" 时无效',
      setter: 'expressionSetter',
    },
    { name: 'title', title: '子菜单项值', setter: 'expressionSetter' },
    {
      name: 'onTitleClick',
      title: '点击子菜单标题',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

export const MenuItemGroup: ComponentPrototypeType = {
  name: 'MenuItemGroup',
  title: '导航菜单',
  package: '@music163/antd',
  icon: '',
  type: 'element',
  props: [
    ...StylePrototypes,
    { name: 'children', title: '分组的菜单项', setter: 'expressionSetter' },
    { name: 'title', title: '分组标题', setter: 'expressionSetter' },
  ],
};

export const MenuDivider: ComponentPrototypeType = {
  name: 'MenuDivider',
  title: '导航菜单',
  package: '@music163/antd',
  icon: '',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'dashed',
      title: '是否虚线',
      setter: 'boolSetter',
    },
  ],
};

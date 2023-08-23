import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Dropdown: ComponentPrototypeType = {
  name: 'Dropdown',
  title: '下拉菜单',
  package: '@music163/antd',
  icon: 'icon-xialacaidan',
  type: 'element',
  initChildren: '<a>Hover me <Icon type="DownOutlined" /></a>',
  hasChildren: true,
  help: '向下弹出的列表，当页面上的操作命令过多时，用此组件可以收纳操作元素',
  relatedImports: ['Text', 'Menu', 'Icon'],
  props: [
    {
      name: 'arrow',
      title: '下拉框箭头是否显示',
      setter: 'boolSetter',
    },
    { name: 'disabled', title: '菜单是否禁用', tip: '菜单是否禁用', setter: 'boolSetter' },
    {
      name: 'destroyPopupOnHide',
      title: '关闭后是否销毁 Dropdown',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'getPopupContainer',
      title: '菜单渲染父节点',
      tip: '默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'overlay',
      title: '菜单',
      setter: 'expressionSetter',
      initValue:
        '{<Menu><Menu.Item key="0">操作1</Menu.Item><Menu.Item key="1">操作2</Menu.Item><Menu.Item key="2">操作3</Menu.Item></Menu>}',
    },
    {
      name: 'overlayClassName',
      title: '下拉根元素的类名称',
      setter: 'textSetter',
      group: 'advanced',
    },
    { name: 'overlayStyle', group: 'style', title: '下拉根元素的样式' },
    {
      name: 'placement',
      title: '菜单弹出位置',
      setter: 'textSetter',
      tip: '菜单弹出位置：bottomLeft｜bottomCenter｜bottomRight｜topLeft｜topCenter｜topRight',
    },
    {
      name: 'trigger',
      title: '触发下拉的行为',
      tip: '移动端不支持 hover',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'Array<click|hover|contextMenu>', value: 'Array<click|hover|contextMenu>' },
        ],
      },
    },
    {
      name: 'visible',
      title: '菜单是否显示',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'onVisibleChange',
      title: '菜单显示状态改变时调用',
      tip: '参数为 visible。点击菜单按钮导致的消失不会触发',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

export const DropdownButton: ComponentPrototypeType = {
  name: 'DropdownButton',
  title: '下拉菜单',
  package: '@music163/antd',
  icon: '',
  type: 'element',
  props: [
    {
      name: 'buttonsRender',
      title: '自定义左右两个按钮',
      setter: 'expressionSetter',
    },
    { name: 'disabled', title: '菜单是否禁用', setter: 'boolSetter' },
    { name: 'icon', title: '右侧的 icon', setter: 'expressionSetter' },
    { name: 'overlay', title: '菜单', setter: 'expressionSetter' },
    {
      name: 'placement',
      title: '菜单弹出位置',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'bottomLeft', value: 'bottomLeft' },
          { label: 'bottomCenter', value: 'bottomCenter' },
          { label: 'bottomRight', value: 'bottomRight' },
          { label: 'topLeft', value: 'topLeft' },
          { label: 'topCenter', value: 'topCenter' },
          { label: 'topRight', value: 'topRight' },
        ],
      },
    },
    {
      name: 'size',
      title: '按钮大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'medium' },
          { label: '大', value: 'large' },
        ],
      },
    },
    {
      name: 'trigger',
      title: '触发下拉的行为',
      setter: 'expressionSetter',
    },
    {
      name: 'type',
      title: '按钮类型',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'primary', value: 'primary' },
          { label: 'secondary', value: 'secondary' },
          { label: 'normal', value: 'normal' },
        ],
      },
    },
    { name: 'visible', title: '菜单是否显示', setter: 'boolSetter' },
    {
      name: 'onClick',
      title: '点击左侧按钮的回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onVisibleChange',
      title: '菜单显示状态改变时调用',
      tip: '参数为 visible',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

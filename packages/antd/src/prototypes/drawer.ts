import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Drawer: ComponentPrototypeType = {
  title: '抽屉',
  name: 'Drawer',
  exportType: 'namedExport',
  icon: 'icon-chouti',
  type: 'container',
  package: '@music163/antd',
  help: '屏幕边缘滑出的浮层面板。',
  hasChildren: true,
  initChildren: '',
  props: [
    ...StylePrototypes,
    {
      name: 'id',
      title: '弹窗 ID',
      tip: '设置弹窗 ID，可以借助 tango.openModal 轻松唤起弹窗',
      setter: 'textSetter',
    },
    {
      name: 'visible',
      title: '是否显示',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'title',
      title: '标题',
      initValue: '抽屉标题',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'closable',
      title: '是否显示关闭按钮',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'destroyOnClose',
      title: '关闭时销毁子元素',
      setter: 'boolSetter',
      defaultValue: false,
    },
    {
      name: 'width',
      title: '宽度',
      defaultValue: 378,
      setter: 'numberSetter',
    },
    {
      name: 'height',
      title: '高度',
      tip: '在 placement 为 top 或 bottom 时使用',
      setter: 'numberSetter',
      group: 'advanced',
    },
    {
      name: 'onClose',
      title: '点击关闭按钮的回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'afterVisibleChange',
      title: '切换动画结束后的回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'placement',
      title: '抽屉的方向',
      defaultValue: 'right',
      options: [
        { label: '上', value: 'top' },
        { label: '右', value: 'right' },
        { label: '下', value: 'bottom' },
        { label: '左', value: 'left' },
      ],
      setter: 'choiceSetter',
      group: 'basic',
    },
    {
      name: 'size',
      title: '预设尺寸',
      setter: 'choiceSetter',
      defaultValue: 'default',
      options: [
        { label: '默认', value: 'default' },
        { label: '更宽', value: 'large' },
      ],
    },
    {
      name: 'mask',
      title: '是否展示遮罩',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'keyboard',
      title: '是否支持键盘 esc 关闭',
      setter: 'boolSetter',
    },
    {
      name: 'extra',
      title: '右上角的操作区域',
      setter: 'jsxSetter',
    },
    {
      name: 'zIndex',
      title: '设置 Drawer 的 z-index',
      defaultValue: 1000,
      setter: 'numberSetter',
      group: 'advanced',
    },
    {
      name: 'getContainer',
      title: '指定弹层的挂载容器',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'maskStyle',
      title: '遮罩样式',
      setter: 'expressionSetter',
      group: 'style',
    },
    {
      name: 'drawerStyle',
      title: '弹出层的样式',
      setter: 'expressionSetter',
      group: 'style',
    },
    {
      name: 'headerStyle',
      title: '头部的样式',
      setter: 'expressionSetter',
      group: 'style',
    },
    {
      name: 'footerStyle',
      title: '页脚部件的样式',
      setter: 'expressionSetter',
      group: 'style',
    },
  ],
  rules: {
    canMoveIn(incomingName: string) {
      return !(incomingName === Drawer.name);
    },
  },
};

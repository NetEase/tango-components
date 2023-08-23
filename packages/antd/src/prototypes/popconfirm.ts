import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';
import { Button as ButtonPrototype } from './button';

export const Popconfirm: ComponentPrototypeType = {
  name: 'Popconfirm',
  title: '气泡确认框',
  package: '@music163/antd',
  icon: 'icon-qipaoqueren',
  help: '点击元素，弹出气泡式的确认框',
  type: 'element',
  hasChildren: true,
  initChildren: '<Button children="删除" />',
  relatedImports: ['Button'],
  props: [
    ...StylePrototypes,
    { name: 'title', title: '确认框文本', initValue: '确认吗？', setter: 'expressionSetter' },
    {
      name: 'placement',
      title: '气泡框位置',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'top', value: 'top' },
          { label: 'left', value: 'left' },
          { label: 'right', value: 'right' },
          { label: 'bottom', value: 'bottom' },
          { label: 'topLeft', value: 'topLeft' },
          { label: 'topRight', value: 'topRight' },
          { label: 'bottomLeft', value: 'bottomLeft' },
          { label: 'bottomRight', value: 'bottomRight' },
          { label: 'leftTop', value: 'leftTop' },
          { label: 'leftBottom', value: 'leftBottom' },
          { label: 'rightTop', value: 'rightTop' },
          { label: 'rightBottom', value: 'rightBottom' },
        ],
      },
    },
    {
      name: 'trigger',
      title: '触发行为',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'hover', value: 'hover' },
          { label: 'focus', value: 'focus' },
          { label: 'click', value: 'click' },
          { label: 'contextMenu', value: 'contextMenu' },
        ],
      },
    },
    {
      name: 'visible',
      title: '浮层显隐',
      setter: 'boolSetter',
    },
    {
      name: 'cancelText',
      title: '取消按钮文字',
      setter: 'textSetter',
    },
    {
      name: 'okText',
      title: '确认按钮文字',
      setter: 'textSetter',
    },
    {
      name: 'okType',
      title: '确认按钮类型',
      setter: 'textSetter',
    },
    {
      name: 'cancelButtonProps',
      title: '取消按钮',
      props: ButtonPrototype.props,
      group: 'advanced',
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
    },
    {
      name: 'icon',
      title: '气泡图标',
      setter: 'iconSetter',
    },
    {
      name: 'okButtonProps',
      title: '确认按钮',
      props: ButtonPrototype.props,
      group: 'advanced',
    },
    { name: 'onCancel', title: '点击取消的回调', setter: 'actionSetter', group: 'event' },
    { name: 'onConfirm', title: '点击确认的回调', setter: 'actionSetter', group: 'event' },
    // 共同API
    // {
    //   name: 'align',
    //   title: '该值将合并到 placement 的配置中，设置参考 rc-tooltip',
    //   tip: '该值将合并到 placement 的配置中，设置参考 rc-tooltip',
    //   setter: 'expressionSetter',
    // },
    {
      name: 'arrowPointAtCenter',
      title: '箭头指向目标元素中心',
      setter: 'boolSetter',
    },
    {
      name: 'autoAdjustOverflow',
      title: '自动调整位置',
      tip: '气泡被遮挡时自动调整位置',
      setter: 'boolSetter',
    },
    { name: 'color', title: '背景颜色', setter: 'colorSetter' },
    {
      name: 'defaultVisible',
      title: '默认是否显隐',
      setter: 'boolSetter',
    },
    {
      name: 'destroyTooltipOnHide',
      title: '关闭后是否销毁 Tooltip',
      tip: '当 keepParent 为 false 时销毁父容器',
      setter: 'boolSetter',
    },
    {
      name: 'getPopupContainer',
      title: '浮层渲染父节点',
      tip: '默认渲染到 body 上',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'mouseEnterDelay',
      title: '延时显示',
      tip: '鼠标移入后延时多少才显示 Tooltip，单位：秒',
      setter: 'numberSetter',
    },
    {
      name: 'mouseLeaveDelay',
      title: '延时隐藏',
      tip: '鼠标移出后延时多少才隐藏 Tooltip，单位：秒',
      setter: 'numberSetter',
    },
    { name: 'overlayClassName', title: '卡片类名', setter: 'textSetter', group: 'style' },
    {
      name: 'overlayStyle',
      group: 'style',
      title: '卡片样式',
      setter: 'expressionSetter',
    },
    {
      name: 'overlayInnerStyle',
      group: 'style',
      title: '卡片内容区域样式',
      setter: 'expressionSetter',
    },
    {
      name: 'zIndex',
      title: 'z-index',
      setter: 'numberSetter',
      group: 'advanced',
    },
    {
      name: 'onVisibleChange',
      title: '显示隐藏的回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

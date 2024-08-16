import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Tooltip: ComponentPrototypeType = {
  name: 'Tooltip',
  title: '文字提示',
  package: '@music163/antd',
  icon: 'icon-wenzitishi',
  help: '简单的文字提示气泡框，气泡浮层不承载复杂文本和操作',
  type: 'element',
  hasChildren: true,
  initChildren: '<span>文本提示</span>',
  props: [
    ...StylePrototypes,
    {
      name: 'title',
      title: '提示文字',
      tip: '提示文字',
      setter: 'textSetter',
      initValue: '提示文字',
    },
    {
      name: 'arrowPointAtCenter',
      title: '箭头指向目标元素中心',
      setter: 'boolSetter',
      defaultValue: false,
    },
    {
      name: 'autoAdjustOverflow',
      title: '自动调整位置',
      tip: '气泡被遮挡时自动调整位置',
      setter: 'boolSetter',
      defaultValue: true,
    },
    { name: 'color', title: '背景颜色', setter: 'colorSetter' },
    {
      name: 'defaultVisible',
      title: '默认是否显隐',
      setter: 'boolSetter',
      defaultValue: false,
    },
    {
      name: 'destroyTooltipOnHide',
      title: '关闭后是否销毁 Tooltip',
      tip: '当 keepParent 为 false 时销毁父容器',
      props: [
        {
          name: 'keepParent',
          title: '是否销毁父容器',
          setter: 'boolSetter',
        },
      ],
      defaultValue: false,
    },
    {
      name: 'getPopupContainer',
      title: '浮层渲染父节点',
      tip: '默认渲染到 body 上',
      setter: 'expressionSetter',
      group: 'advanced',
      defaultValue: () => document.body,
    },
    {
      name: 'mouseEnterDelay',
      title: '延时显示',
      tip: '鼠标移入后延时多少才显示 Tooltip，单位：秒',
      setter: 'numberSetter',
      defaultValue: 0.1,
    },
    {
      name: 'mouseLeaveDelay',
      title: '延时隐藏',
      tip: '鼠标移出后延时多少才隐藏 Tooltip，单位：秒',
      setter: 'numberSetter',
      defaultValue: 0.1,
    },
    { name: 'overlayClassName', title: '卡片类名', setter: 'textSetter', group: 'style' },
    {
      name: 'overlayStyle',
      group: 'style',
      title: '卡片样式',
      setter: 'expressionSetter',
      setterProps: {
        expressionType: 'cssObject'
      },
    },
    {
      name: 'overlayInnerStyle',
      group: 'style',
      title: '卡片内容区域样式对象',
      setter: 'expressionSetter',
      setterProps: {
        expressionType: 'cssObject'
      },
    },
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
      defaultValue: 'top',
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
      defaultValue: 'hover',
    },
    {
      name: 'visible',
      title: '浮层显隐',
      setter: 'boolSetter',
      defaultValue: false,
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

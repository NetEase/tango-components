import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Anchor: ComponentPrototypeType = {
  name: 'Anchor',
  title: '锚点',
  package: '@music163/antd',
  icon: 'icon-maodian',
  type: 'element',
  props: [
    ...StylePrototypes,
    { name: 'affix', title: '固定模式', setter: 'boolSetter', initValue: true },
    {
      name: 'bounds',
      title: '锚点区域边界',
      setter: 'numberSetter',
      group: 'advanced',
    },
    {
      name: 'getContainer',
      title: '指定滚动的容器',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'getCurrentAnchor',
      title: '自定义高亮的锚点',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'offsetTop',
      title: '距离窗口顶部偏移量后触发',
      setter: 'numberSetter',
    },
    {
      name: 'showInkInFixed',
      title: '显示小圆点',
      tip: 'affix={false} 时是否显示小圆点',
      setter: 'boolSetter',
    },
    {
      name: 'targetOffset',
      title: '锚点滚动偏移量',
      tip: '默认与 offsetTop 相同',
      setter: 'numberSetter',
      group: 'advanced',
    },
    {
      name: 'onChange',
      title: '监听锚点链接改变',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(currentActiveLink)=>{}'],
    },
    {
      name: 'onClick',
      title: 'onClick事件',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

export const AnchorLink: ComponentPrototypeType = {
  name: 'Link',
  title: '锚点',
  package: '@music163/antd',
  icon: 'icon-maodianlink',
  type: 'element',
  props: [
    ...StylePrototypes,
    { name: 'href', title: '锚点链接', setter: 'textSetter' },
    {
      name: 'target',
      title: '显示链接的资源位置',
      setter: 'textSetter',
    },
    { name: 'title', title: '文字内容', setter: 'expressionSetter' },
  ],
};

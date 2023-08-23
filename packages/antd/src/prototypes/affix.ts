import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Affix: ComponentPrototypeType = {
  name: 'Affix',
  title: '固钉',
  package: '@music163/antd',
  icon: 'icon-guding',
  type: 'element',
  props: [
    {
      name: 'offsetBottom',
      title: '距离窗口底部偏移量触发',
      tip: '距离窗口底部达到指定偏移量后触发',
      setter: 'numberSetter',
    },
    {
      name: 'offsetTop',
      title: '距离窗口顶部偏移量触发',
      tip: '距离窗口顶部达到指定偏移量后触发',
      setter: 'numberSetter',
    },
    {
      name: 'target',
      title: '设置监听目标',
      tip: '设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'onChange',
      title: 'onChange事件',
      tip: '固定状态改变时触发的回调函数',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(affixed)=>{}'],
    },
  ],
};

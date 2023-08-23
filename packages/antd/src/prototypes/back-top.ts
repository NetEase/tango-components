import { ComponentPrototypeType } from '@music163/tango-helpers';

export const BackTop: ComponentPrototypeType = {
  name: 'BackTop',
  title: '回到顶部',
  package: '@music163/antd',
  icon: 'icon-huidaodingbu',
  type: 'element',
  props: [
    {
      name: 'duration',
      title: '回到顶部所需时间(ms)',
      setter: 'numberSetter',
    },
    {
      name: 'target',
      title: '监听对象',
      tip: '设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数',
      setter: 'expressionSetter',
    },
    {
      name: 'visibilityHeight',
      title: '出现时的滚动高度',
      setter: 'numberSetter',
    },
    {
      name: 'onClick',
      title: 'onClick事件',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Page: ComponentPrototypeType = {
  name: 'Page',
  title: '页面容器',
  icon: 'icon-page',
  type: 'page',
  package: '@music163/antd',
  hasChildren: true,
  props: [
    {
      name: 'title',
      title: '页面标题',
      setter: 'textSetter',
    },
    {
      name: 'subTitle',
      title: '副标题',
      setter: 'jsxSetter',
    },
    {
      name: 'extra',
      title: '标题栏右侧附加内容',
      setter: 'jsxSetter',
    },
    {
      name: 'headerFooter',
      title: '标题栏底部附加内容',
      setter: 'jsxSetter',
    },
    {
      name: 'onMount',
      title: '页面加载完成后执行',
      setter: 'eventSetter',
      group: 'event',
    },
    {
      name: 'onUnmount',
      title: '页面卸载前执行',
      setter: 'eventSetter',
      group: 'event',
    },
    {
      name: 'bg',
      title: '背景',
      setter: 'bgSetter',
      group: 'style',
    },
  ],
  rules: {
    canMoveIn(incomingName) {
      return ['Section', 'Columns', 'Box', 'When'].includes(incomingName);
    },
  },
};

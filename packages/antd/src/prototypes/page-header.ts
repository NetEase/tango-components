import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const PageHeader: ComponentPrototypeType = {
  name: 'PageHeader',
  title: '页头',
  package: '@music163/antd',
  icon: 'icon-yetou',
  type: 'element',
  props: [
    ...StylePrototypes,
    { name: 'avatar', title: '头像', setter: 'expressionSetter' },
    {
      name: 'backIcon',
      title: '自定义 back icon',
      tip: '如果为 false 不渲染 back icon',
      setter: 'iconSetter',
      group: 'advanced',
    },
    { name: 'breadcrumb', title: '面包屑的配置', setter: 'expressionSetter' },
    {
      name: 'breadcrumbRender',
      title: '自定义面包屑区域的内容',
      setter: 'expressionSetter',
    },
    {
      name: 'extra',
      title: '操作区',
      tip: '位于 title 行的行尾',
      setter: 'expressionSetter',
    },
    {
      name: 'footer',
      title: '页脚',
      tip: '一般用于渲染 TabBar',
      setter: 'expressionSetter',
    },
    {
      name: 'ghost',
      title: '幽灵',
      setter: 'boolSetter',
    },
    {
      name: 'subTitle',
      title: '二级标题文字',
      setter: 'expressionSetter',
    },
    {
      name: 'tags',
      title: 'tag列表',
      tip: '位于title旁',
      setter: 'expressionSetter',
    },
    { name: 'title', title: '自定义标题文字', setter: 'expressionSetter' },
    {
      name: 'onBack',
      title: '返回按钮的点击事件',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

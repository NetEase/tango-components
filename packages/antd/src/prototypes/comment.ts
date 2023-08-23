import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Comment: ComponentPrototypeType = {
  name: 'Comment',
  title: '评论',
  package: '@music163/antd',
  icon: 'icon-pinglun',
  type: 'element',
  help: '对网站内容的反馈、评价和讨论，可用于对事物的讨论，例如页面、博客文章、问题等等',
  hasChildren: true,
  relatedImports: ['Avatar', 'Placeholder'],
  props: [
    ...StylePrototypes,
    {
      name: 'content',
      title: '评论的主要内容',
      setter: 'jsxSetter',
      initValue: '{<Placeholder text="放置替换" />}',
    },
    {
      name: 'author',
      title: '要显示为注释作者的元素',
      setter: 'jsxSetter',
      initValue: '{<span>多多</span>}',
    },
    {
      name: 'avatar',
      title: '要显示为评论头像的元素',
      setter: 'jsxSetter',
      initValue: '{<Avatar src="https://joeschmoe.io/api/v1/random" alt="Tango App" />}',
    },
    {
      name: 'actions',
      title: '在评论内容下面呈现的操作项列表',
      tip: '例：{[<span key="1">abc</span>]}',
      // jsxSetter 不支持 ReactNode[] 类型
      setter: 'expressionSetter',
    },
    { name: 'datetime', title: '展示时间描述', setter: 'jsxSetter' },
    {
      name: 'children',
      title: '嵌套注释应作为注释的子项提供',
      setter: 'jsxSetter',
    },
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Markdown: ComponentPrototypeType = {
  name: 'Markdown',
  title: 'Markdown',
  package: '@music163/tango-mail',
  icon: 'icon-markdown',
  type: 'element',
  hasChildren: false,
  props: [
    {
      name: 'markdownContainerStyles',
      title: 'markdown容器样式',
      setter: 'codeSetter',
    },
    {
      name: 'markdownCustomStyles',
      title: 'markdown自定义样式',
      setter: 'codeSetter',
    },
    {
      name: 'children',
      title: '内容',
      setter: 'codeSetter',
      initValue: '# This is a ~~strikethrough~~',
    },
  ],
};

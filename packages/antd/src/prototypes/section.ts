import { ComponentPrototypeType } from '@music163/tango-helpers';
import { CommonSystemStylePrototypes, StylePrototypes } from './common';

export const Section: ComponentPrototypeType = {
  name: 'Section',
  title: '布局区块',
  icon: 'icon-mianban',
  type: 'element',
  package: '@music163/antd',
  help: '区域容器，可以用来将页面划分成多个区域，每个区域放置具体的内容模块。',
  hasChildren: true,
  initChildren: '',
  props: [
    // ...IsRenderPrototypes,
    ...CommonSystemStylePrototypes,
    ...StylePrototypes,
    {
      name: 'title',
      title: '容器标题',
      setter: 'textSetter',
      initValue: '区块标题',
    },
    {
      name: 'shape',
      title: '容器外观',
      setter: 'choiceSetter',
      options: [
        { label: '卡片', value: 'panel' },
        { label: '正常', value: 'box' },
      ],
    },
    {
      name: 'span',
      title: '占据的列数',
      tip: '仅在容器为弹性容器时才生效',
      setter: 'numberSetter',
      setterProps: {
        max: 24,
        min: 1,
      },
    },
    {
      name: 'extra',
      title: '页头附加内容',
      setter: 'jsxSetter',
    },
  ],
  rules: {
    childrenContainerSelector: '.one-section-content',
  },
};

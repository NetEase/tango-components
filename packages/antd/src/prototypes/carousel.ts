import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Carousel: ComponentPrototypeType = {
  name: 'Carousel',
  title: '走马灯',
  package: '@music163/antd',
  icon: 'icon-zoumadeng',
  type: 'element',
  help: '旋转木马，一组轮播的区域',
  hasChildren: true,
  initChildren: '<Placeholder text="放置替换" /><Placeholder text="放置替换" />',
  relatedImports: ['Placeholder'],
  props: [
    ...StylePrototypes,
    {
      name: 'autoplay',
      title: '是否自动切换',
      setter: 'boolSetter',
    },
    {
      name: 'dotPosition',
      title: '面板指示点位置',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'top', value: 'top' },
          { label: 'bottom', value: 'bottom' },
          { label: 'left', value: 'left' },
          { label: 'right', value: 'right' },
        ],
      },
    },
    {
      name: 'dots',
      title: '是否显示面板指示点',
      // antd 文档错误，实际只支持 className, https://github.com/ant-design/ant-design/blob/29a15e2a5dccb9faad4dff165ccaffa57c828ffa/components/carousel/index.tsx#L89
      tip: '如果为 object 则同时可以指定 dots 的 className',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'easing',
      title: '动画效果',
      setter: 'textSetter',
    },
    {
      name: 'effect',
      title: '动画效果函数',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'scrollx', value: 'scrollx' },
          { label: 'fade', value: 'fade' },
        ],
      },
    },
    { name: 'afterChange', title: '切换面板的回调', setter: 'actionSetter', group: 'event' },
    {
      name: 'beforeChange',
      title: '切换面板的回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

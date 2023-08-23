import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Avatar: ComponentPrototypeType = {
  name: 'Avatar',
  title: '头像',
  package: '@music163/antd',
  icon: 'icon-touxiang',
  help: '用来代表用户或事物，支持图片、图标或字符展示',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'alt',
      title: '图像不显示的替代文本',
      setter: 'textSetter',
    },
    {
      name: 'gap',
      title: '字符距离两侧边界像素',
      setter: 'numberSetter',
    },
    {
      name: 'icon',
      title: '图标',
      setter: 'jsxSetter',
    },
    {
      name: 'shape',
      title: '形状',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'circle', value: 'circle' },
          { label: 'square', value: 'square' },
        ],
      },
    },
    {
      name: 'size',
      title: '大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'large', value: 'large' },
          { label: 'small', value: 'small' },
          { label: 'default', value: 'default' },
        ],
      },
    },
    {
      name: 'src',
      title: '图片类资源地址',
      tip: '图片类头像的资源地址或者图片元素',
      setter: 'textSetter',
      initValue: 'https://joeschmoe.io/api/v1/random',
    },
    {
      name: 'srcSet',
      title: '图片类响应式资源地址',
      setter: 'textSetter',
    },
    { name: 'draggable', title: '图片是否允许拖动', setter: 'boolSetter', group: 'advanced' },
    {
      name: 'crossOrigin',
      title: 'CORS 属性设置',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: "'anonymous'", value: "'anonymous'" },
          { label: "'use-credentials'", value: "'use-credentials'" },
          { label: "''", value: "''" },
        ],
      },
      group: 'advanced',
    },
    {
      name: 'onError',
      title: '图片加载失败的事件',
      tip: '图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

export const AvatarGroup: ComponentPrototypeType = {
  name: 'AvatarGroup',
  title: '头像',
  package: '@music163/antd',
  icon: '',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'maxCount',
      title: '显示的最大头像个数',
      setter: 'numberSetter',
    },
    {
      name: 'maxPopoverPlacement',
      title: '多余头像气泡弹出位置',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'top', value: 'top' },
          { label: 'bottom', value: 'bottom' },
        ],
      },
      group: 'advanced',
    },
    {
      name: 'maxStyle',
      group: 'style',
      title: '多余头像样式',
      setter: 'expressionSetter',
    },
    {
      name: 'size',
      title: '头像大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'large', value: 'large' },
          { label: 'small', value: 'small' },
          { label: 'default', value: 'default' },
        ],
      },
    },
  ],
};

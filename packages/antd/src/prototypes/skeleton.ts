import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const SkeletonAvatar: ComponentPrototypeType = {
  name: 'SkeletonAvatar',
  title: '骨架屏（头像）',
  package: '@music163/antd',
  icon: 'icon-placeholder',
  type: 'element',
  hasChildren: true,
  props: [
    ...StylePrototypes,
    {
      name: 'active',
      title: '是否展示动画效果',
      tip: '仅在单独使用头像骨架时生效',
      setter: 'boolSetter',
      defaultValue: false,
    },
    {
      name: 'shape',
      title: '指定头像的形状',
      tip: '指定头像的形状',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: '圆形', value: 'circle' },
          { label: '方形', value: 'square' },
        ],
      },
    },
    {
      name: 'size',
      title: '设置头像占位图的大小',
      tip: '设置头像占位图的大小',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: '大', value: 'large' },
          { label: '默认', value: 'default' },
          { label: '小', value: 'small' },
        ],
      },
    },
  ],
};

export const SkeletonButton: ComponentPrototypeType = {
  name: 'SkeletonButton',
  title: '骨架屏（按钮）',
  package: '@music163/antd',
  icon: 'icon-placeholder',
  type: 'element',
  hasChildren: true,
  props: [
    ...StylePrototypes,
    {
      name: 'active',
      title: '是否展示动画效果',
      setter: 'boolSetter',
      defaultValue: false,
    },
    {
      name: 'block',
      title: '与容器等宽',
      tip: '将按钮宽度调整为其父宽度的选项',
      setter: 'boolSetter',
      defaultValue: false,
    },
    {
      name: 'shape',
      title: '指定按钮的形状',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '圆形', value: 'circle' },
          { label: '圆角', value: 'round' },
          { label: '默认', value: 'default' },
        ],
      },
    },
    {
      name: 'size',
      title: '按钮大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '大', value: 'large' },
          { label: '默认', value: 'default' },
          { label: '小', value: 'small' },
        ],
      },
    },
  ],
};

export const SkeletonInput: ComponentPrototypeType = {
  name: 'SkeletonInput',
  title: '骨架屏（输入框）',
  package: '@music163/antd',
  icon: 'icon-placeholder',
  type: 'element',
  hasChildren: true,
  props: [
    ...StylePrototypes,
    {
      name: 'active',
      title: '是否展示动画效果',
      setter: 'boolSetter',
      defaultValue: false,
    },
    {
      name: 'size',
      title: '输入框大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '大', value: 'large' },
          { label: '默认', value: 'default' },
          { label: '小', value: 'small' },
        ],
      },
    },
  ],
};

export const SkeletonImage: ComponentPrototypeType = {
  name: 'SkeletonImage',
  title: '骨架屏（图片）',
  package: '@music163/antd',
  icon: 'icon-placeholder',
  type: 'element',
  hasChildren: true,
  props: [
    ...StylePrototypes,
    {
      name: 'active',
      title: '是否展示动画效果',
      setter: 'boolSetter',
    },
  ],
};

export const SkeletonNode: ComponentPrototypeType = {
  name: 'SkeletonNode',
  title: '骨架屏（结点）',
  package: '@music163/antd',
  icon: 'icon-placeholder',
  type: 'element',
  hasChildren: true,
  props: [
    ...StylePrototypes,
    {
      name: 'active',
      title: '是否展示动画效果',
      setter: 'boolSetter',
    },
  ],
};

export const Skeleton: ComponentPrototypeType = {
  name: 'Skeleton',
  title: '骨架屏',
  package: '@music163/antd',
  icon: 'icon-placeholder',
  help: '在需要等待加载内容的位置提供一个占位图形组合',
  type: 'element',
  hasChildren: true,
  props: [
    ...StylePrototypes,
    {
      name: 'active',
      title: '是否展示动画效果',
      setter: 'boolSetter',
    },
    {
      name: 'avatar',
      title: '是否显示头像占位图',
      props: SkeletonAvatar.props,
    },
    {
      name: 'loading',
      title: '显示占位图',
      tip: '为 true 时，显示占位图。反之则直接展示子组件',
      setter: 'boolSetter',
      initValue: true,
    },
    {
      name: 'paragraph',
      title: '是否显示段落占位图',
      props: [
        {
          name: 'rows',
          title: '设置段落占位图的行数',
          setter: 'numberSetter',
        },
        {
          name: 'width',
          title: '设置段落占位图的宽度',
          tip: '设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度',
          setter: 'numberSetter',
        },
      ],
    },
    {
      name: 'round',
      title: '显示圆角',
      tip: '为 true 时，段落和标题显示圆角',
      setter: 'boolSetter',
    },
    {
      name: 'title',
      title: '显示标题占位图',
      props: [
        {
          name: 'width',
          title: '设置标题占位图的宽度',
          setter: 'numberSetter',
        },
      ],
    },
  ],
};

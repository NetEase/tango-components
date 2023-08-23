import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Image: ComponentPrototypeType = {
  name: 'Image',
  title: '图片',
  exportType: 'namedExport',
  icon: 'icon-tupian',
  type: 'element',
  help: '展示一种图片，并且可以进入快捷预览态。',
  package: '@music163/antd',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    {
      name: 'src',
      title: '图片地址',
      setter: 'imageSetter',
      initValue:
        'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/13453231430/b4b0/9d0d/41b8/d86ab8ef2c2ab9835905493eaf657dd2.png',
    },
    {
      name: 'alt',
      title: '图像描述',
      setter: 'textSetter',
      initValue: 'image',
    },
    {
      name: 'preview',
      title: '是否预览',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'fallback',
      title: '加载失败容错地址',
      setter: 'textSetter',
    },
    {
      name: 'width',
      title: '宽度',
      setter: 'numberSetter',
    },
    {
      name: 'height',
      title: '高度',
      setter: 'numberSetter',
    },
    {
      name: 'onError',
      title: '加载错误回调',
      setter: 'eventSetter',
      group: 'event',
    },
  ],
};

export const ImageList: ComponentPrototypeType = {
  name: 'ImageList',
  title: '图片列表',
  exportType: 'namedExport',
  icon: 'icon-tupian',
  type: 'element',
  help: '当需要展示一组图片时，从一张图片点开相册，可在 Table 的单元格或描述列表中使用',
  package: '@music163/antd',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    {
      name: 'src',
      title: '图片地址',
      setter: 'expressionSetter',
    },
    {
      name: 'size',
      title: '图片大小',
      setter: 'numberSetter',
    },
    {
      name: 'gap',
      title: '图片左右间距',
      setter: 'numberSetter',
    },
  ],
};

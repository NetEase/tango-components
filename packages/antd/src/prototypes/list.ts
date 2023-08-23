import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';
import { Pagination } from './pagination';

export const List: ComponentPrototypeType = {
  name: 'List',
  title: '列表',
  package: '@music163/antd',
  icon: 'icon-liebiao',
  help: '最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面',
  type: 'element',
  hasChildren: true,
  childrenName: 'ListItem',
  relatedImports: ['ListItem'],
  initChildren: '<ListItem /><ListItem />',
  props: [
    ...StylePrototypes,
    {
      name: 'bordered',
      title: '是否展示边框',
      setter: 'boolSetter',
    },
    {
      name: 'dataSource',
      title: '列表数据源',
      setter: 'expressionSetter',
      initValue: ['Racing car sprays burning fuel into crowd.'],
    },
    { name: 'footer', title: '列表底部', setter: 'expressionSetter' },
    { name: 'grid', title: '列表栅格配置', setter: 'expressionSetter' },
    { name: 'header', title: '列表头部', setter: 'expressionSetter' },
    {
      name: 'itemLayout',
      title: '设置 List.Item 布局',
      setter: 'textSetter',
    },
    {
      name: 'loading',
      title: 'loading',
      tip: '当卡片内容还在加载中时，可以用 loading 展示一个占位',
      setter: 'boolSetter',
    },
    { name: 'loadMore', title: '加载更多', setter: 'expressionSetter' },
    {
      name: 'locale',
      title: '默认文案设置',
      group: 'advanced',
      setter: 'expressionSetter',
    },
    {
      name: 'pagination',
      title: '翻页配置',
      props: Pagination.props,
    },
    {
      name: 'renderItem',
      title: '自定义渲染列表项',
      setter: 'expressionSetter',
    },
    {
      name: 'rowKey',
      title: '行key',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'keyof T', value: 'keyof T' },
          { label: '(item: T) => React.Key', value: '(item: T) => React.Key' },
        ],
      },
    },
    {
      name: 'size',
      title: '尺寸',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'default', value: 'default' },
          { label: 'large', value: 'large' },
          { label: 'small', value: 'small' },
        ],
      },
    },
    {
      name: 'split',
      title: '展示分割线',
      setter: 'boolSetter',
      defaultValue: true,
    },
  ],
};

export const ListItem: ComponentPrototypeType = {
  name: 'ListItem',
  title: '列表Item',
  package: '@music163/antd',
  icon: 'icon-shujuzhanshiitem',
  type: 'element',
  hasChildren: true,
  childrenName: ['ListItemMeta', 'Text', 'Box'],
  props: [
    ...StylePrototypes,
    {
      name: 'actions',
      title: '列表操作组',
      tip: '根据 itemLayout 的不同, 位置在卡片底部或者最右侧',
      setter: 'expressionSetter',
    },
    {
      name: 'extra',
      title: '额外内容',
      tip: '通常用在 itemLayout 为 vertical 的情况下, 展示右侧内容; horizontal 展示在列表元素最右侧',
      setter: 'expressionSetter',
    },
  ],
};

export const ListItemMeta: ComponentPrototypeType = {
  name: 'ListItemMeta',
  title: '列表Item',
  package: '@music163/antd',
  icon: '',
  type: 'element',
  relatedImports: ['Avatar'],
  hasChildren: true,
  props: [
    { name: 'title', title: '标题', setter: 'expressionSetter', initValue: '标题' },
    {
      name: 'avatar',
      title: '图标',
      setter: 'expressionSetter',
      initValue: '{<Avatar src="https://joeschmoe.io/api/v1/random" alt="Tango App" />}',
    },
    {
      name: 'description',
      title: '描述内容',
      setter: 'expressionSetter',
      initValue: '这里提供列表项的正文内容',
    },
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Pagination: ComponentPrototypeType = {
  name: 'Pagination',
  title: '分页',
  package: '@music163/antd',
  icon: 'icon-fenyeqi',
  help: '采用分页的形式分隔长列表，每次只加载一个页面',
  type: 'element',
  props: [
    ...StylePrototypes,
    { name: 'disabled', title: '禁用分页', setter: 'boolSetter' },
    { name: 'pageSize', title: '每页条数', setter: 'numberSetter' },
    {
      name: 'type',
      title: '表格分页类型',
      setter: 'pickerSetter',
      tip: '仅表格内设置生效',
      setterProps: {
        options: [
          { label: '后端分页', value: 'backend' },
          { label: '前端分页', value: 'frontend' },
        ],
      },
    },
    {
      name: 'size',
      title: '大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'default', value: 'default' },
          { label: 'small', value: 'small' },
        ],
      },
    },
    {
      name: 'simple',
      title: '简单分页',
      setter: 'boolSetter',
    },
    {
      name: 'showSizeChanger',
      title: '展示 pageSize 切换器',
      tip: '当 total 大于 50 时默认为 true',
      setter: 'boolSetter',
    },
    {
      name: 'pageSizeOptions',
      title: '指定每页可以显示多少条',
      tip: '示例：[10,20,50,100]',
      setter: 'expressionSetter',
    },
    {
      name: 'showTotal',
      title: '总量和当前数量展示',
      setter: 'expressionSetter',
    },
    { name: 'total', title: '数据总数', setter: 'numberSetter', initValue: 20 },
    { name: 'current', title: '当前页数', setter: 'numberSetter' },
    {
      name: 'defaultCurrent',
      title: '默认的当前页数',
      setter: 'numberSetter',
      initValue: 1,
    },
    {
      name: 'defaultPageSize',
      title: '默认的每页条数',
      setter: 'numberSetter',
    },
    {
      name: 'hideOnSinglePage',
      title: '隐藏分页器',
      tip: '只有一页时是否隐藏分页器',
      setter: 'boolSetter',
    },
    {
      name: 'itemRender',
      title: '自定义页码的结构',
      tip: '可用于优化 SEO',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'responsive',
      title: '屏幕宽度自动调整尺寸',
      tip: '当 size 未指定时，根据屏幕宽度自动调整尺寸',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'showLessItems',
      title: '显示较少页面内容',
      setter: 'boolSetter',
    },
    {
      name: 'showQuickJumper',
      title: '快速跳转至某页',
      setter: 'boolSetter',
    },
    {
      name: 'showTitle',
      title: '显示原生 tooltip 页码提示',
      setter: 'boolSetter',
    },
    {
      name: 'onChange',
      title: '页码或 pageSize 改变的回调',
      tip: '参数是改变后的页码及每页条数',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(page, pageSize)=>{}'],
    },
    {
      name: 'onShowSizeChange',
      title: 'pageSize 变化的回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

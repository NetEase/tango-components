import { ComponentPrototypeType } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from './common';

const mockData = [];
for (let i = 0; i < 5; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  });
}

export const Transfer: ComponentPrototypeType = {
  name: 'Transfer',
  title: '穿梭框',
  package: '@music163/antd',
  icon: 'icon-chuansuokuang1',
  type: 'element',
  help: '双栏穿梭选择框，需要在多个可选项中进行多选时使用的控件',
  props: [
    ...StylePrototypes,
    ...InstancePrototypes,
    {
      name: 'dataSource',
      title: '数据源',
      setter: 'expressionSetter',
      initValue: mockData,
    },
    {
      name: 'disabled',
      title: '是否禁用',
      setter: 'boolSetter',
    },
    {
      name: 'filterOption',
      title: '筛选',
      setter: 'expressionSetter',
    },
    { name: 'footer', title: '底部渲染函数', setter: 'expressionSetter' },
    {
      name: 'listStyle',
      title: '两个穿梭框的自定义样式',
      setter: 'expressionSetter',
      group: 'style',
    },
    {
      name: 'locale',
      title: '各种语言',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'oneWay',
      title: '展示为单向样式',
      setter: 'boolSetter',
    },
    {
      name: 'operations',
      title: '操作栏文案',
      setter: 'expressionSetter',
    },
    {
      name: 'operationStyle',
      group: 'style',
      title: '操作栏自定义样式',
      setter: 'expressionSetter',
    },
    {
      name: 'pagination',
      title: '分页',
      setter: 'expressionSetter',
    },
    {
      name: 'render',
      title: '每行数据渲染函数',
      setter: 'expressionSetter',
      initValue: `{(item) => item.title}`,
      group: 'advanced',
    },
    {
      name: 'selectAllLabels',
      title: '顶部多选框标题的集合',
      setter: 'expressionSetter',
    },
    {
      name: 'selectedKeys',
      title: '当前选中项',
      setter: 'expressionSetter',
    },
    {
      name: 'showSearch',
      title: '是否显示搜索框',
      setter: 'boolSetter',
    },
    {
      name: 'showSelectAll',
      title: '是否展示全选勾选框',
      setter: 'boolSetter',
    },
    {
      name: 'targetKeys',
      title: '显示在右侧框数据的keys',
      setter: 'expressionSetter',
    },
    {
      name: 'titles',
      title: '两侧标题集合',
      setter: 'expressionSetter',
      initValue: ['source', 'target'],
    },
    {
      name: 'onChange',
      title: '选项在两栏之间转移时的回调函数',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(targetKeys, direction, moveKeys)=>{}'],
    },
    {
      name: 'onScroll',
      title: '选项列表滚动时的回调函数',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onSearch',
      title: '搜索框内容时改变时的回调函数',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onSelectChange',
      title: '选中项发生改变时的回调函数',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

// 属性的属性
// export const Render: ComponentPrototypeType = {
//   name: 'Render',
//   title: '穿梭框',
//   package: '@music163/antd',
//   icon: '',
//   type: 'element',
// //   props: [
//     {
//       name: 'direction',
//       title: '渲染列表的方向',
//       tip: '渲染列表的方向',
//       setter: 'pickerSetter',
//       setterProps: {
//         options: [
//           { label: 'left', value: 'left' },
//           { label: 'right', value: 'right' },
//         ],
//       },
//       defaultValue: '',
//     },
//     {
//       name: 'disabled',
//       title: '是否禁用列表',
//       tip: '是否禁用列表',
//       setter: 'boolSetter',
//       defaultValue: '',
//     },
//     { name: 'filteredItems', title: '过滤后的数据', tip: '过滤后的数据', defaultValue: '' },
//     { name: 'selectedKeys', title: '选中的条目', tip: '选中的条目', defaultValue: '' },
//     { name: 'onItemSelect', title: '勾选条目', tip: '勾选条目', defaultValue: '' },
//     { name: 'onItemSelectAll', title: '勾选一组条目', tip: '勾选一组条目', defaultValue: '' },
//   ],
// };

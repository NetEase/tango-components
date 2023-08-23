import { ComponentPrototypeType } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from './common';

export const Cascader: ComponentPrototypeType = {
  title: '级联选择',
  name: 'Cascader',
  exportType: 'namedExport',
  icon: 'icon-jilianxuanze',
  type: 'element',
  package: '@music163/antd',
  help: '级联选择框，从一组相关联的数据集合进行选择，如省市区，公司层级，事物分类等',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    ...InstancePrototypes,
    {
      name: 'options',
      title: '选项列表',
      tip: '支持异步数据载入',
      setter: 'expressionSetter',
      group: 'basic',
      initValue: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'allowClear',
      title: '是否允许显示清空',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'value',
      title: '值',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'onChange',
      title: '选择完成后的回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(value, selectedOptions)=>{}'],
    },
    {
      name: 'onSearch',
      title: '搜素输入时的回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'showSearch',
      title: '是否显示搜索框',
      setter: 'boolSetter',
    },
    {
      name: 'multiple',
      title: '是否支持多选',
      setter: 'boolSetter',
    },
    {
      name: 'size',
      title: '输入框大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'medium' },
          { label: '大', value: 'large' },
        ],
      },
    },
    {
      name: 'loadData',
      title: '动态加载选项',
      setter: 'expressionSetter',
      autoCompleteOptions: ['(selectedOptions) => {} '],
      tip: '无法与 showSearch 一起使用',
    },
  ],
};

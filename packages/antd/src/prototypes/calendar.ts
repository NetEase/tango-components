import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Calendar: ComponentPrototypeType = {
  name: 'Calendar',
  title: '日历',
  package: '@music163/antd',
  icon: 'icon-riqixuanze',
  help: '按照日历形式展示数据的容器控件',
  type: 'element',
  props: [
    ...StylePrototypes,
    { name: 'value', title: '展示日期', setter: 'numberSetter' },
    {
      name: 'dateCellRender',
      title: '自定义渲染日期单元格',
      tip: '返回内容会被追加到单元格',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'dateFullCellRender',
      title: '自定义渲染日期单元格',
      tip: '返回内容覆盖单元格',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'defaultValue',
      title: '默认展示的日期',
      setter: 'numberSetter',
    },
    {
      name: 'disabledDate',
      title: '不可选择的日期',
      tip: '参数为当前 value，注意使用时不要直接修改',
      setter: 'expressionSetter',
    },
    {
      name: 'fullscreen',
      title: '是否全屏显示',
      defaultValue: true,
      setter: 'boolSetter',
    },
    {
      name: 'headerRender',
      title: '自定义头部内容',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'locale',
      title: '国际化配置',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'mode',
      title: '初始模式',
      setter: 'pickerSetter',
      defaultValue: 'month',
      setterProps: {
        options: [
          { label: '月', value: 'month' },
          { label: '年', value: 'year' },
        ],
      },
    },
    {
      name: 'monthCellRender',
      title: '自定义渲染月单元格',
      tip: '自定义渲染月单元格，返回内容会被追加到单元格',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'monthFullCellRender',
      title: '自定义渲染月单元格',
      tip: '自定义渲染月单元格，返回内容覆盖单元格',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'validRange',
      title: '设置可以显示的日期',
      setter: 'expressionSetter',
    },
    {
      name: 'onChange',
      title: '日期变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(date)=>{}'],
    },
    {
      name: 'onPanelChange',
      title: '日期面板变化回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onSelect',
      title: '点击选择日期回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

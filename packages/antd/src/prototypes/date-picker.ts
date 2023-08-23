import { ComponentPrototypeType } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from './common';

export const PickerCommonProps: ComponentPrototypeType['props'] = [
  ...StylePrototypes,
  ...InstancePrototypes,
  {
    name: 'placeholder',
    title: '输入框提示文字',
    tip: '如果是范围选择，请使用数组形式表示',
    setter: 'textSetter',
    group: 'basic',
  },
  {
    name: 'picker',
    title: '设置选择器类型',
    setterProps: {
      options: [
        { label: '时间', value: 'date' },
        { label: '周', value: 'week' },
        { label: '月', value: 'month' },
        { label: '年', value: 'year' },
        { label: '十年', value: 'decade' },
      ],
    },
    setter: 'pickerSetter',
  },
  {
    name: 'defaultValue',
    title: '默认日期值',
    setter: 'textSetter',
    tip: '接受类型：string、number、Moment，如果是范围选择，请使用数组形式表示',
    group: 'basic',
  },
  {
    name: 'format',
    title: '显示的日期格式',
    tip: '年-月-日：YYYY-MM-DD，时:分:秒：hh:mm:ss，如果是范围选择，请使用数组形式表示',
    setter: 'textSetter',
    group: 'basic',
  },
  {
    name: 'valueType',
    title: '提交的日期格式',
    setter: 'choiceSetter',
    options: [
      { label: 'Moment', value: 'moment', tip: '返回Moment对象' },
      { label: '字符串', value: 'string', tip: '返回格式化日期字符串' },
      { label: '时间戳', value: 'timestamp', tip: '返回时间戳（毫秒）' },
    ],
    defaultValue: 'moment',
  },
  {
    name: 'showTime',
    title: '增加时间选择',
    setter: 'boolSetter',
    group: 'basic',
  },
  {
    name: 'allowClear',
    title: '清除按钮',
    setter: 'boolSetter',
    group: 'basic',
  },
  {
    name: 'bordered',
    title: '边框',
    setter: 'boolSetter',
    group: 'style',
  },
  {
    name: 'disabled',
    title: '禁用',
    tip: '如果是范围选择，请使用数组形式表示',
    setter: 'boolSetter',
  },
  {
    name: 'popupStyle',
    title: '额外的弹出日历样式',
    setter: 'expressionSetter',
    group: 'style',
    autoCompleteOptions: ['{}'],
  },
  {
    name: 'popupClassName',
    title: '额外的弹出日历样式名',
    setter: 'textSetter',
    group: 'style',
  },
  // advance
  {
    name: 'suffixIcon',
    title: '选择框后缀图标',
    setter: 'iconSetter',
    group: 'advanced',
  },
  {
    name: 'prevIcon',
    title: '<切换图标',
    setter: 'iconSetter',
    group: 'advanced',
  },
  {
    name: 'nextIcon',
    title: '>切换图标',
    setter: 'iconSetter',
    group: 'advanced',
  },
  {
    name: 'superNextIcon',
    title: '>>切换图标',
    setter: 'iconSetter',
    group: 'advanced',
  },
  {
    name: 'superPrevIcon',
    title: '<<切换图标',
    setter: 'iconSetter',
    group: 'advanced',
  },
  {
    name: 'disabledDate',
    title: '不可选择的日期',
    setter: 'expressionSetter',
    group: 'advanced',
    autoCompleteOptions: [
      `current => {
      // // 示例：不可选择今日（包含）之前的日期
      return current && current < moment().endOf('day');
    }
    `,
    ],
  },
  {
    name: 'disabledTime',
    title: '不可选择的时间',
    tip: '需要showTime=true',
    setter: 'expressionSetter',
    autoCompleteOptions: [
      `(date) => ({
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    })`,
    ],
    group: 'advanced',
  },
  {
    name: 'dateRender',
    title: '日期单元格的内容&样式',
    setter: 'expressionSetter',
    group: 'advanced',
    tip: '自定义日期单元格的内容和样式',
    autoCompleteOptions: [
      `current => {
      // 示例：给每个月的第一天增加样式
      const style = {};
      if (current.date() === 1) {
        style.border = '1px solid #1890ff';
        style.borderRadius = '50%';
      }
      return (
        <div className="ant-picker-cell-inner" style={style}>
          {current.date()}
        </div>
      );
    }`,
    ],
  },
  {
    name: 'renderExtraFooter',
    title: '额外的页脚',
    setter: 'expressionSetter',
    group: 'advanced',
    autoCompleteOptions: ['()=>"extraFooter"'],
  },
  {
    name: 'panelRender',
    title: '自定义渲染面板',
    setter: 'expressionSetter',
    group: 'advanced',
    autoCompleteOptions: ['(panelNode) => panelNode'],
  },
  {
    name: 'inputReadOnly',
    title: '输入框为只读',
    setter: 'boolSetter',
    tip: '避免在移动设备上打开虚拟键盘',
    group: 'advanced',
  },
  {
    name: 'open',
    title: '展开控制弹层',
    setter: 'boolSetter',
    group: 'advanced',
  },
  // {
  //   name: 'getPopupContainer',
  //   title: '定义浮层的容器',
  //   setter: 'expressionSetter',
  //   group: 'advanced',
  // },
  {
    name: 'locale',
    title: '国际化配置',
    setter: 'expressionSetter',
    tip: '该配置项需手动引入依赖，详细见文档：',
    group: 'advanced',
  },
  {
    name: 'size',
    title: '输入框大小',
    setterProps: {
      options: [
        { label: '小', value: 'small' },
        { label: '中', value: 'middle' },
        { label: '大', value: 'large' },
      ],
    },
    setter: 'choiceSetter',
    group: 'basic',
  },
  {
    name: 'onChange',
    title: '时间变化回调',
    setter: 'actionSetter',
    group: 'event',
    autoCompleteOptions: ['(date,dateString)=>{}'],
  },
  {
    name: 'onOpenChange',
    title: '日历弹出关闭回调',
    setter: 'actionSetter',
    group: 'event',
  },
  {
    name: 'onPanelChange',
    title: '日历面板切换回调',
    setter: 'actionSetter',
    group: 'event',
  },
  {
    name: 'autoFocus',
    title: '自动获取焦点',
    setter: 'boolSetter',
    group: 'advanced',
  },
];

export const DatePicker: ComponentPrototypeType = {
  name: 'DatePicker',
  title: '日期选择框',
  icon: 'icon-riqishijian',
  type: 'element',
  package: '@music163/antd',
  help: '当需要输入或选择具体日期的控件',
  hasChildren: false,
  props: [
    ...PickerCommonProps,
    {
      name: 'rangePlacement',
      title: '快捷时间展示位置',
      setter: 'choiceSetter',
      options: [
        { label: '左侧', value: 'left' },
        { label: '底部', value: 'bottom' },
      ],
      group: 'advanced',
      tip: '搭配 ranges 来使用',
    },
    {
      name: 'ranges',
      title: '时间范围快捷选择',
      setter: 'expressionSetter',
      group: 'advanced',
      autoCompleteOptions: [
        `{
        Today: moment(),
        'This Month': moment().endOf('month'),
      }`,
      ],
    },
    {
      name: 'onOk',
      title: '确定按钮回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'showNow',
      title: '显示“此刻”按钮',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'showToday',
      title: '展示“今天”按钮',
      setter: 'boolSetter',
      group: 'advanced',
    },
  ],
};

export const MonthPicker: ComponentPrototypeType = {
  name: 'MonthPicker',
  title: '月选择器',
  icon: 'icon-month',
  type: 'element',
  package: '@music163/antd',
  help: '当需要输入或选择具体月份的控件',
  hasChildren: false,
  props: [
    ...PickerCommonProps,
    {
      name: 'monthCellRender',
      title: '自定义渲染月份内容',
      setter: 'expressionSetter',
      autoCompleteOptions: [
        `(date) => {
        return date.format("MM");
      }`,
      ],
      group: 'advanced',
    },
  ],
};

export const YearPicker: ComponentPrototypeType = {
  name: 'YearPicker',
  title: '年选择器',
  icon: 'icon-year',
  type: 'element',
  package: '@music163/antd',
  help: '当需要输入或选择具体年份的控件',
  hasChildren: false,
  props: [...PickerCommonProps],
};

export const WeekPicker: ComponentPrototypeType = {
  name: 'WeekPicker',
  title: '周选择框',
  icon: 'icon-week',
  type: 'element',
  package: '@music163/antd',
  help: '当需要输入或选择具体周的控件',
  hasChildren: false,
  props: [...PickerCommonProps],
};

export const DateRangePicker: ComponentPrototypeType = {
  name: 'DateRangePicker',
  title: '日期选择框 Range',
  icon: 'icon-date-range',
  type: 'element',
  package: '@music163/antd',
  help: '当需要输入或选择具体日期范围的控件',
  hasChildren: false,
  props: [
    {
      name: 'rangePlacement',
      title: '快捷时间展示位置',
      setter: 'choiceSetter',
      options: [
        { label: '左侧', value: 'left' },
        { label: '底部', value: 'bottom' },
      ],
      group: 'advanced',
      tip: '搭配 ranges 来使用',
    },
    {
      name: 'ranges',
      title: '时间范围快捷选择',
      setter: 'expressionSetter',
      group: 'advanced',
      autoCompleteOptions: [
        `{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }`,
      ],
    },
    {
      name: 'allowEmpty',
      title: '允许起始项部分为空',
      setter: 'expressionSetter',
      group: 'advanced',
      autoCompleteOptions: ['[true, false]'],
    },
    {
      name: 'separator',
      title: '分隔符',
      setter: 'iconSetter',
      group: 'advanced',
    },
    ...PickerCommonProps,
    {
      name: 'onCalendarChange',
      title: '日期发生变化回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

export const DatePickerPro = DatePicker;
export const DateRangePickerPro = DateRangePicker;

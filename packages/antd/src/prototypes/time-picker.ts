import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';
import { DateRangePicker } from './date-picker';

export const TimePicker: ComponentPrototypeType = {
  name: 'TimePicker',
  title: '时间选择框',
  icon: 'icon-shijianxuanze',
  type: 'element',
  package: '@music163/antd',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    {
      name: 'placeholder',
      title: '输入框提示内容',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'format',
      title: '显示的日期格式',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'valueType',
      title: '提交的日期格式',
      setter: 'choiceSetter',
      options: [
        { label: 'Moment', value: 'moment', tip: 'onChange 默认返回 moment value' },
        { label: '字符串', value: 'string', tip: 'onChange 默认返回格式化日期字符串' },
        { label: '时间戳', value: 'timestamp', tip: 'onChange 默认返回时间戳（毫秒）' },
      ],
      defaultValue: 'moment',
    },
    {
      name: 'defaultValue',
      title: '默认时间',
      setter: 'expressionSetter',
      group: 'basic',
      autoCompleteOptions: ['moment()'],
    },
    {
      name: 'allowClear',
      title: '展示清除按钮',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'clearIcon',
      title: '清除图标',
      setter: 'iconSetter',
    },
    {
      name: 'clearText',
      title: '清除时提示文案',
      setter: 'textSetter',
    },
    {
      name: 'minuteStep',
      title: '分钟选项间隔',
      setter: 'numberSetter',
    },
    {
      name: 'hourStep',
      title: '小时选项间隔',
      setter: 'numberSetter',
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
    },
    {
      name: 'open',
      title: '打开面板',
      setter: 'boolSetter',
    },
    // style
    {
      name: 'bordered',
      title: '边框',
      setter: 'boolSetter',
      group: 'style',
    },
    { name: 'popupClassName', title: '弹出层类名', setter: 'textSetter', group: 'style' },
    {
      name: 'popupStyle',
      title: '弹出层样式对象',
      setter: 'expressionSetter',
      group: 'style',
      autoCompleteOptions: ['{}'],
    },
    // event
    {
      name: 'onChange',
      title: '时间变化回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onOpenChange',
      title: '面板开关回调',
      setter: 'actionSetter',
      group: 'event',
    },
    // advance
    {
      name: 'use12Hours',
      title: '使用12小时制',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'showNow',
      title: '“此刻”按钮',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'suffixIcon',
      title: '后缀图标',
      setter: 'iconSetter',
      group: 'advanced',
    },
    {
      name: 'autoFocus',
      title: '自动获取焦点',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'secondStep',
      title: '秒选项间隔',
      setter: 'numberSetter',
    },
    {
      name: 'inputReadOnly',
      title: '输入框为只读',
      setter: 'boolSetter',
      tip: '避免在移动设备上打开虚拟键盘',
      group: 'advanced',
    },
    {
      name: 'renderExtraFooter',
      title: '额外的页脚',
      setter: 'expressionSetter',
      group: 'advanced',
      autoCompleteOptions: ['()=>"extraFooter"'],
    },
    // {
    //   name: 'hideDisabledOptions',
    //   title: '隐藏禁止选择的选项',
    //   setter: 'boolSetter',
    // },
    // {
    //   name: 'disabledHours',
    //   title: '禁止小时选项',
    //   setter: 'expressionSetter',
    // },
    // {
    //   name: 'disabledMinutes',
    //   title: '禁止分钟选项',
    //   setter: 'expressionSetter',
    // },
    // {
    //   name: 'disabledSeconds',
    //   title: '禁止秒选项',
    //   setter: 'expressionSetter',
    // },
    // {
    //   name: 'getPopupContainer',
    //   title: '浮层的容器',
    //   tip: '定义浮层的容器，默认为 body 上新建 div',
    //   setter: 'expressionSetter',
    //   group: 'advanced',
    // },
  ],
};

const names = ['value', 'defaultValue', 'showTime'];
const others = DateRangePicker.props.filter((item) => names.indexOf(item.name) === -1);

export const TimeRangePicker: ComponentPrototypeType = {
  name: 'TimeRangePicker',
  title: '时间选择框 Range',
  icon: 'icon-time-range',
  type: 'element',
  package: '@music163/antd',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    {
      name: 'value',
      title: '时间值',
      setter: 'timeRangeSetter',
      group: 'basic',
    },
    {
      name: 'defaultValue',
      title: '默认时间值',
      setter: 'timeRangeSetter',
      group: 'basic',
    },
    {
      name: 'order',
      title: '始末时间是否自动排序',
      setter: 'boolSetter',
      group: 'advanced',
    },
    ...others,
  ],
};

export const TimePickerPro = TimePicker;
export const TimeRangePickerPro = TimeRangePicker;

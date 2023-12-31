import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Slider: ComponentPrototypeType = {
  name: 'Slider',
  title: '滑动输入条',
  package: '@music163/antd',
  icon: 'icon-huadongtiao',
  help: '滑动型输入器，展示当前值和可选范围',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'allowClear',
      title: '支持清除, 单选模式有效',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'defaultValue',
      title: '设置初始取值',
      setter: 'numberSetter',
      tip: '当 range 为 false 时，使用 number，否则用 [number, number]',
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
      defaultValue: false,
    },
    {
      name: 'dots',
      title: '是否只能拖拽到刻度上',
      setter: 'boolSetter',
      defaultValue: false,
    },
    {
      name: 'getTooltipPopupContainer',
      title: 'Tooltip 渲染父节点',
      tip: '默认渲染到 body 上',
      setter: 'expressionSetter',
    },
    {
      name: 'included',
      title: '包含',
      tip: 'marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'marks',
      title: '刻度标记',
      tip: 'key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式',
      setter: 'expressionSetter',
      defaultValue:
        '{ number: ReactNode } or { number: { style: CSSProperties, label: ReactNode } }',
    },
    { name: 'max', title: '最大值', setter: 'numberSetter', defaultValue: 100 },
    { name: 'min', title: '最小值', setter: 'numberSetter', defaultValue: 0 },
    {
      name: 'range',
      title: '双滑块模式',
      setter: 'boolSetter',
      defaultValue: false,
    },
    {
      name: 'reverse',
      title: '反向坐标轴',
      setter: 'boolSetter',
      defaultValue: false,
    },
    {
      name: 'step',
      title: '步长',
      tip: '取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分',
      setter: 'numberSetter',
      defaultValue: 1,
    },
    {
      name: 'tipFormatter',
      title: '格式化 Tooltip 的内容',
      setter: 'expressionSetter',
      tip: 'Slider 会把当前值传给 tipFormatter，并在 Tooltip 中显示 tipFormatter 的返回值，若为 null，则隐藏 Tooltip',
    },
    {
      name: 'tooltipPlacement',
      title: '设置 Tooltip 展示位置',
      setter: 'textSetter',
      tip: '参考 Tooltip 组件',
    },
    {
      name: 'tooltipVisible',
      title: '显示 Tooltip',
      setter: 'boolSetter',
      tip: '值为 true 时,Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时',
    },
    {
      name: 'value',
      title: '设置当前取值',
      setter: 'numberSetter',
      tip: '当 range 为 false 时，使用 number，否则用 [number, number]',
    },
    {
      name: 'vertical',
      title: '垂直',
      setter: 'boolSetter',
      tip: '值为 true 时，Slider 为垂直方向',
    },
    {
      name: 'onAfterChange',
      title: 'onAfterChange事件',
      setter: 'actionSetter',
      group: 'event',
      tip: '与 onmouseup 触发时机一致，把当前值作为参数传入',
    },
    {
      name: 'onChange',
      title: 'onChange事件',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(value)=>{}'],
      tip: '当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入',
    },
  ],
};

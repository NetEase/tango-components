import { ComponentPropType } from '@music163/tango-helpers';

export const StylePrototypes: ComponentPropType[] = [
  {
    name: 'style',
    title: '样式对象',
    setter: 'expressionSetter',
    group: 'style',
    autoCompleteOptions: ['{}'],
  },
  {
    name: 'className',
    title: '自定义样式类名',
    setter: 'textSetter',
    group: 'style',
  },
];

export const InstancePrototypes: ComponentPropType[] = [
  {
    name: 'id',
    title: '唯一标识符',
    tip: '唯一标记此组件，可以用于快捷获取此组件的实例和状态',
    setter: 'textSetter',
    disableVariableSetter: true,
  },
  {
    name: 'model',
    title: '将值同步到目标变量',
    tip: '自动将组件变化的结果同步到的变量，后续可以通过该变量获取该组件的状态值。特别的，表单组件使用model可获取所有子项的内容，不需要单独为子项绑定model，详细见：',
    setter: 'modelSetter',
    disableVariableSetter: true,
  },
];

export const CommonSystemStylePrototypes: ComponentPropType[] = [
  {
    name: 'color',
    title: '文本颜色',
    setter: 'colorSetter',
    group: 'style',
  },
  {
    name: 'bg',
    title: '背景色',
    setter: 'bgSetter',
    group: 'style',
  },
  {
    name: 'opacity',
    title: '透明度',
    setter: 'sliderSetter',
    setterProps: {
      max: 1,
      min: 0,
      step: 0.1,
    },
    defaultValue: 1,
    group: 'style',
  },
  {
    name: 'm',
    title: '外间距',
    setter: 'spacingSetter',
    group: 'style',
  },
  {
    name: 'p',
    title: '内间距',
    setter: 'spacingSetter',
    group: 'style',
  },
];

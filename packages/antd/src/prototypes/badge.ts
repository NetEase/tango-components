import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Badge: ComponentPrototypeType = {
  name: 'Badge',
  title: '徽标数',
  package: '@music163/antd',
  icon: 'icon-huibiaoshu',
  help: '图标右上角的圆形徽标数字，用于显示需要处理的消息条数',
  type: 'element',
  hasChildren: true,
  initChildren: '<Placeholder text="放置替换" />',
  relatedImports: ['Placeholder'],
  props: [
    ...StylePrototypes,
    {
      name: 'text',
      title: '设置状态点文本',
      tip: '在设置了 status 的前提下有效，设置状态点的文本',
      setter: 'expressionSetter',
    },
    {
      name: 'title',
      title: '状态点tooltip',
      tip: '设置鼠标放在状态点上时显示的文字',
      setter: 'textSetter',
    },
    {
      name: 'count',
      title: '展示的数字',
      tip: '展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏',
      setter: 'expressionSetter',
      initValue: 100,
    },
    {
      name: 'dot',
      title: '展示小红点',
      setter: 'boolSetter',
    },
    { name: 'offset', title: '状态点的位置偏移', setter: 'numberSetter' },
    {
      name: 'overflowCount',
      title: '封顶数值',
      setter: 'numberSetter',
    },
    {
      name: 'showZero',
      title: '展示0值',
      tip: '当数值为 0 时，是否展示 Badge',
      setter: 'boolSetter',
    },
    {
      name: 'size',
      title: '小圆点大小',
      tip: '在设置了 count 的前提下有效，设置小圆点的大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'default', value: 'default' },
          { label: 'small', value: 'small' },
        ],
      },
    },
    {
      name: 'status',
      title: '设置状态点',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'success', value: 'success' },
          { label: 'processing', value: 'processing' },
          { label: 'default', value: 'default' },
          { label: 'error', value: 'error' },
          { label: 'warning', value: 'warning' },
        ],
      },
    },
    {
      name: 'color',
      title: '小圆点的颜色',
      setter: 'colorSetter',
    },
  ],
};

export const RibbonBadge: ComponentPrototypeType = {
  name: 'RibbonBadge',
  title: '缎带徽标',
  package: '@music163/antd',
  icon: 'icon-duandaihuibiao',
  type: 'element',
  help: '使用缎带型的徽标',
  hasChildren: true,
  initChildren: '<Placeholder text="放置替换" />',
  relatedImports: ['Placeholder'],
  props: [
    ...StylePrototypes,
    {
      name: 'text',
      title: '缎带中填入的内容',
      setter: 'expressionSetter',
      initValue: 'Happy',
    },
    {
      name: 'placement',
      title: '缎带的位置',
      tip: 'start 和 end 随文字方向（RTL 或 LTR）变动',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'start', value: 'start' },
          { label: 'end', value: 'end' },
        ],
      },
    },
    { name: 'color', title: '自定义缎带的颜色', setter: 'colorSetter' },
  ],
};

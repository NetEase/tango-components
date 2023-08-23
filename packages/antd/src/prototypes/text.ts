import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Text: ComponentPrototypeType = {
  name: 'Text',
  title: '文本',
  exportType: 'namedExport',
  icon: 'icon-wenzi',
  type: 'element',
  package: '@music163/antd',
  help: '原子布局组件，创建一个行内的文本内容。',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    {
      name: 'children',
      title: '文本内容',
      setter: 'textSetter',
      initValue: '简单文本',
    },
    {
      name: 'isTruncated',
      title: '是否允许溢出',
      setter: 'boolSetter',
    },
    {
      name: 'lineClamp',
      title: '最多展示行数',
      setter: 'numberSetter',
      tip: '配合无布局模式时生效',
    },
    {
      name: 'type',
      title: '格式类型',
      setter: 'pickerSetter',
      options: [
        { label: '日期', value: 'date' },
        { label: '数字', value: 'number' },
      ],
    },
    {
      name: 'format',
      title: '格式化设置',
      setter: 'expressionSetter',
      getVisible: (form) => ['number', 'date'].includes(form.getValue('type')),
    },
    {
      name: 'fontSize',
      title: '文本尺寸',
      setter: 'textSetter',
      tip: '需要指定单位',
    },
    {
      name: 'fontWeight',
      title: '字体粗细',
      setter: 'pickerSetter',
      options: [
        { label: '正常', value: 400 },
        { label: '加粗', value: 700 },
        { label: '减细', value: 100 },
      ],
    },
    {
      name: 'color',
      title: '文本颜色',
      setter: 'colorSetter',
    },
    {
      name: 'align',
      title: '对齐方式',
      setter: 'pickerSetter',
      options: [
        { label: '居中', value: 'center' },
        { label: '左对齐', value: 'left' },
        { label: '右对齐', value: 'right' },
        { label: '默认', value: 'initial' },
      ],
      tip: '配合布局模式为 block 或 inline-block 时生效',
    },
    {
      name: 'display',
      title: '布局模式',
      setter: 'choiceSetter',
      options: [
        { value: 'block', icon: 'icon-display-block' },
        { value: 'inline-block', icon: 'icon-display-inline-block' },
        { value: 'inline', icon: 'icon-display-inline' },
      ],
      setterProps: {
        mode: 'icon',
      },
    },
    {
      name: 'm',
      title: '外间距',
      setter: 'spacingSetter',
    },
    {
      name: 'p',
      title: '内间距',
      setter: 'spacingSetter',
    },
  ],
};

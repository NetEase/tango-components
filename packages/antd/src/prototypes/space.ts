import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Space: ComponentPrototypeType = {
  name: 'Space',
  title: '间距',
  package: '@music163/antd',
  icon: 'icon-jianju',
  type: 'element',
  help: '设置组件之间的间距',
  hasChildren: true,
  initChildren: '<Placeholder text="放置替换" /><Placeholder text="放置替换" />',
  relatedImports: ['Placeholder'],
  props: [
    ...StylePrototypes,
    {
      name: 'direction',
      title: '间距方向',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'vertical', value: 'vertical' },
          { label: 'horizontal', value: 'horizontal' },
        ],
      },
      defaultValue: 'horizontal'
    },
    {
      name: 'size',
      title: '间距大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'small', value: 'small' },
          { label: 'middle', value: 'middle' },
          { label: 'large', value: 'large' },
        ],
      },
      defaultValue: 'small'
    },
    {
      name: 'align',
      title: '对齐方式',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'start', value: 'start' },
          { label: 'end', value: 'end' },
          { label: 'center', value: 'center' },
          { label: 'baseline', value: 'baseline' },
        ],
      },
    },
    { name: 'split', title: '设置拆分', setter: 'expressionSetter' },
    {
      name: 'wrap',
      title: '是否自动换行',
      setter: 'boolSetter',
      defaultValue: false
    },
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Form: ComponentPrototypeType = {
  name: 'Form',
  title: '表单',
  package: '@music163/formily',
  icon: 'icon-biaodan',
  type: 'element',
  hasChildren: true,
  props: [
    {
      name: 'layout',
      title: '表单布局',
      setter: 'pickerSetter',
      group: 'basic',
      options: [
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
        { label: 'inline', value: 'inline' },
      ],
    },
    {
      name: 'labelWidth',
      title: '标签宽度',
      setter: 'numberSetter',
      group: 'basic',
    },
    {
      name: 'form',
      title: 'form',
      setter: 'expressionSetter',
      group: 'basic',
    },
  ],
};

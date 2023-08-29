import { ComponentPrototypeType } from '@music163/tango-helpers';
import { omitProps } from '../helpers';
import { Input } from './input';
import { Select } from './select';
import { Button } from './button';

const componentPrototypeMap = {
  Input,
  Select,
};

export const FormilyForm: ComponentPrototypeType = {
  name: 'FormilyForm',
  title: 'Formily表单',
  exportType: 'namedExport',
  icon: 'icon-biaodan',
  type: 'element',
  package: '@music163/antd',
  help: 'Formily 表单',
  hasChildren: true,
  initChildren: '<FormilyFormItem component="Input" label="表单项" />',
  relatedImports: ['FormilyFormItem'],
  childrenName: ['FormilyFormItem', 'FormilySubmit', 'FormilyReset'],
  props: [
    {
      name: 'layout',
      title: '表单布局',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: '水平布局', value: 'horizontal' },
          { label: '垂直布局', value: 'vertical' },
          { label: '行内布局', value: 'inline' },
        ],
      },
    },
  ],
};

export const FormilyFormItem: ComponentPrototypeType = {
  name: 'FormilyFormItem',
  title: 'Formily表单项',
  exportType: 'namedExport',
  icon: 'icon-biaodan',
  type: 'element',
  package: '@music163/antd',
  help: 'Formily 表单项',
  hasChildren: false,
  props: [
    {
      name: 'component',
      title: '控件类型',
      setter: 'pickerSetter',
      initValue: 'Input',
      options: [
        { label: '文本输入', value: 'Input' },
        { label: '下拉选择', value: 'Select' },
      ],
    },
    {
      name: 'name',
      title: '标识名',
      setter: 'textSetter',
    },
    {
      name: 'label',
      title: '标签',
      setter: 'textSetter',
      initValue: '表单项',
    },
    {
      name: 'componentProps',
      title: '子组件属性',
      getProp(form) {
        const type = form.getValue('component');
        const proto = { ...componentPrototypeMap[type] };
        const props = omitProps(proto.props, [
          'placeholder',
          'options',
          'onChange',
          'defaultValue',
          'value',
        ]);
        return {
          title: proto.title + '属性',
          props,
        };
      },
      disableVariableSetter: true,
    },
  ],
};

export const FormilySubmit: ComponentPrototypeType = {
  title: '提交',
  name: 'FormilySubmit',
  exportType: 'namedExport',
  icon: 'icon-anniu',
  type: 'element',
  package: '@music163/antd',
  help: '提交表单',
  hasChildren: false,
  props: Button.props,
};

export const FormilyReset: ComponentPrototypeType = {
  title: '重置',
  name: 'FormilyReset',
  exportType: 'namedExport',
  icon: 'icon-anniu',
  type: 'element',
  package: '@music163/antd',
  help: '重置表单。',
  hasChildren: false,
  props: Button.props,
};

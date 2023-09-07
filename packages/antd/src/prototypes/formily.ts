import { ComponentPrototypeType } from '@music163/tango-helpers';
import { omitProps } from '../helpers';
import { Input, TextArea } from './input';
import { Select } from './select';
import { Cascader } from './cascader';
import { CheckboxGroup } from './checkbox';
import { RadioGroup } from './radio';
import { DatePicker, DateRangePicker } from './date-picker';
import { TimePicker, TimeRangePicker } from './time-picker';
import { InputNumber } from './input-number';
import { Switch } from './switch';
import { TreeSelect } from './tree-select';
import { Button } from './button';

const componentPrototypeMap = {
  Input,
  Select,
  TextArea,
  Cascader,
  CheckboxGroup,
  RadioGroup,
  DatePicker,
  DateRangePicker,
  TimeRangePicker,
  TimePicker,
  InputNumber,
  Switch,
  TreeSelect,
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
  initChildren:
    '<FormilyFormItem name="input1" component="Input" label="表单项" /><FormilyFormItem name="select1" component="Select" label="表单项" />',
  relatedImports: ['FormilyFormItem'],
  childrenName: ['FormilyFormItem', 'FormilyFormFooter'],
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
      name: 'label',
      title: '标签名',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'name',
      title: '标识名',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'component',
      title: '控件类型',
      setter: 'expressionSetter',
      options: [
        { label: '输入框', value: 'Input' },
        { label: '数字输入框', value: 'InputNumber' },
        { label: '文本域', value: 'TextArea' },
        { label: '选择框', value: 'Select' },
        { label: '开关', value: 'Switch' },
        { label: '多选框组', value: 'CheckboxGroup' },
        { label: '单选框组', value: 'RadioGroup' },
        { label: '日期选择器', value: 'DatePicker' },
        { label: '日期范围选择器', value: 'DateRangePicker' },
        { label: '时间选择器', value: 'TimePicker' },
        { label: '时间范围选择器', value: 'TimeRangePicker' },
        { label: '级联选择', value: 'Cascader' },
        { label: '树选择', value: 'TreeSelect' },
      ],
      group: 'basic',
    },
    {
      name: 'componentProps',
      title: '控件属性',
      setter: 'expressionSetter',
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
      group: 'basic',
    },
    {
      name: 'required',
      title: '必填',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'initialValue',
      title: '初始值',
      setter: 'expressionSetter',
      group: 'basic',
    },
  ],
};

export const FormilyFormFooter: ComponentPrototypeType = {
  name: 'FormilyFormFooter',
  title: 'Formily操作区',
  exportType: 'namedExport',
  icon: 'icon-biaodan',
  type: 'element',
  package: '@music163/antd',
  hasChildren: true,
  initChildren: `<FormilySubmit>提交</FormilySubmit><FormilyReset>重置</FormilyReset>`,
  relatedImports: ['FormilySubmit', 'FormilyReset'],
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
  props: [
    {
      name: 'onClick',
      title: '点击事件',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onSubmit',
      title: '提交事件',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onSubmitSuccess',
      title: '提交成功事件',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onSubmitFailed',
      title: '提交失败事件',
      setter: 'actionSetter',
      group: 'event',
    },
    ...Button.props,
  ],
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
  props: [
    {
      name: 'forceClear',
      title: '强制清空',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'validate',
      title: '校验表单',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'onClick',
      title: '点击事件',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onResetValidateSuccess',
      title: '重置且校验成功事件',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onResetValidateFailed',
      title: '重置或校验失败事件',
      setter: 'actionSetter',
      group: 'event',
    },
    ...Button.props,
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';
import {
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
} from '@music163/antd/lib/esm/prototypes';

const componentMap = {
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

function omitProps(props: ComponentPrototypeType['props'], omitList: string[]) {
  return props?.filter((prop) => !omitList.includes(prop.name));
}

export const FormItem: ComponentPrototypeType = {
  name: 'FormItem',
  title: '基本表单项',
  package: '@music163/formily',
  icon: 'icon-biaodan',
  type: 'element',
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
        const proto = { ...componentMap[type] };
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

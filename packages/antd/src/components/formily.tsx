import React from 'react';
import {
  Form,
  FormItem,
  FormFooter,
  Checkbox,
  DatePicker,
  Input,
  NumberPicker,
  Password,
  Radio,
  Select,
  Switch,
  TimePicker,
  TreeSelect,
  Submit,
  Reset,
} from '@music163/formily';
import { defineComponent } from '@music163/tango-boot';

const componentMap = new Map();
const register = (name: string, component: React.ComponentType<any>) => {
  componentMap.set(name, component);
};
const list: Array<[string, React.ComponentType<any>]> = [
  ['Input', Input],
  ['InputNumber', NumberPicker],
  ['TextArea', Input.TextArea],
  ['Password', Password],
  ['Switch', Switch],
  ['RadioGroup', Radio.Group],
  ['Checkbox', Checkbox],
  ['CheckboxGroup', Checkbox.Group],
  ['Select', Select],
  ['TreeSelect', TreeSelect],
  ['DatePicker', DatePicker],
  ['RangePicker', DatePicker.RangePicker],
  ['TimePicker', TimePicker],
  ['TimeRangePicker', TimePicker.RangePicker],
];
list.forEach(([name, component]) => register(name, component));

export const FormilyFormItem = defineComponent(
  ({ component, ...rest }: any) => {
    if (typeof component === 'string') {
      component = componentMap.get(component) ?? 'div';
    }
    return <FormItem component={component} {...rest} />;
  },
  {
    name: 'FormilyFormItem',
    designerConfig: {
      hasWrapper: true,
    },
  },
);

export const FormilyForm = defineComponent(Form, {
  name: 'FormilyForm',
  designerConfig: {
    hasWrapper: true,
  },
});

export const FormilyFormFooter = defineComponent(FormFooter, {
  name: 'FormilyFormFooter',
  designerConfig: {
    hasWrapper: true,
  },
});

export const FormilySubmit = defineComponent(Submit, {
  name: 'FormilySubmit',
});

export const FormilyReset = defineComponent(Reset, {
  name: 'FormilyReset',
});

export {
  createForm as createFormilyForm,
  FormConsumer as FormilyFormConsumer,
} from '@music163/formily';

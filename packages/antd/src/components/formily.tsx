import React from 'react';
import { Checkbox, DatePicker, FormItem, Input, NumberPicker, Password, Radio, Select, Switch, TimePicker, TreeSelect } from '@music163/formily';

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

export function FormilyFormItem({ component, ...rest }: any) {
  if (typeof component === 'string') {
    component = componentMap.get(component) ?? 'div';
  }
  return <FormItem component={component} {...rest} />;
}

export {
  Form as FormilyForm,
  FormFooter as FormilyFormFooter,
  Submit as FormilySubmit,
  Reset as FormilyReset,
  createForm as createFormilyForm,
  FormConsumer as FormilyFormConsumer,
} from '@music163/formily';

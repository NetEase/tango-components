import { Input as AntInput } from 'antd';
import { defineComponent } from '@music163/tango-boot';

export const Input = defineComponent(AntInput, {
  name: 'Input',
  registerValue: {
    getValueFromEvent: (e) => e.target.value,
  },
});

export const TextArea = defineComponent(AntInput.TextArea, {
  name: 'TextArea',
  registerValue: {
    getValueFromEvent: (e) => e.target.value,
  },
});

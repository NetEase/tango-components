import { Input as AntInput, InputProps } from 'antd';
import { defineComponent } from '@music163/tango-boot';
import { TextAreaProps } from 'antd/lib/input';

export const Input = defineComponent(AntInput, {
  name: 'Input',
  registerState: {
    getInitStates({ setPageState }, props) {
      return {
        value: props.defaultValue ?? '',
        clear() {
          setPageState({ value: '' });
        },
        setValue(nextValue: string) {
          setPageState({ value: nextValue });
        },
      };
    },

    getTriggerProps({ setPageState, getPageState }): InputProps {
      return {
        value: getPageState()?.value,
        onChange(e) {
          setPageState({ value: e.target.value });
        },
      };
    },
  },
});

export const TextArea = defineComponent(AntInput.TextArea, {
  name: 'TextArea',
  registerState: {
    getInitStates({ setPageState }, props) {
      return {
        value: props.defaultValue ?? '',
        clear() {
          setPageState({ value: '' });
        },
        setValue(nextValue: string) {
          setPageState({ value: nextValue });
        },
      };
    },

    getTriggerProps({ setPageState, getPageState }): TextAreaProps {
      return {
        value: getPageState()?.value,
        onChange(e) {
          setPageState({ value: e.target.value });
        },
      };
    },
  },
});

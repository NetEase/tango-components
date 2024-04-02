import { defineComponent } from '@music163/tango-boot';
import { InputNumber as AntInputNumber, InputNumberProps } from 'antd';

export const InputNumber = defineComponent(AntInputNumber, {
  name: 'InputNumber',
  registerState: {
    getInitStates({ setPageState }, props) {
      return {
        value: props.defaultValue ?? props.value,

        setValue(value: number) {
          setPageState({ value });
        },
      };
    },

    getTriggerProps({ setPageState, getPageState }): InputNumberProps {
      return {
        value: getPageState()?.value,
        onChange(value) {
          setPageState({ value });
        },
      };
    },
  },
});

import { Select as AntSelect, SelectProps } from 'antd';
import { defineComponent } from '@music163/tango-boot';

export const Select = defineComponent(AntSelect, {
  name: 'Select',
  registerState: {
    getInitStates(_, props) {
      return {
        value: props.defaultValue ?? '',
      };
    },

    getTriggerProps({ setPageState, getPageState }): SelectProps {
      return {
        value: getPageState()?.value,
        onChange(value) {
          setPageState({ value });
        },
      };
    },
  },
});

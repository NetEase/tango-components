import { Switch as AntdSwitch } from 'antd';
import { mapProps } from '@formily/react';
import { register } from '../register';

export const Switch = register(
  'Switch',
  AntdSwitch,
  mapProps(
    {
      value: 'checked',
    },
    (props) => {
      const onChange = props.onChange;
      return {
        ...props,
        onChange(checked) {
          onChange?.(checked, null);
        },
      };
    },
  ),
);

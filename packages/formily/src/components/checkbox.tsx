import { mapProps } from '@formily/react';
import { Checkbox as AntdCheckbox } from 'antd';
import { CheckboxProps, CheckboxGroupProps } from 'antd/lib/checkbox';
import { register } from '../register';

type ComposedCheckbox = React.FC<React.PropsWithChildren<CheckboxProps>> & {
  Group?: React.FC<React.PropsWithChildren<CheckboxGroupProps>>;
  __ANT_CHECKBOX?: boolean;
};

export const Checkbox: ComposedCheckbox = register(
  'Checkbox',
  AntdCheckbox,
  mapProps({
    value: 'checked',
  }),
);

Checkbox.__ANT_CHECKBOX = true;

export const CheckboxGroup = register('CheckboxGroup', AntdCheckbox.Group);

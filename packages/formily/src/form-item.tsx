import React from 'react';
import { FormItem as FormilyFormItem, IFormItemProps } from '@formily/antd';
import { Field, IFieldProps } from '@formily/react';

export interface FormItemProps extends IFormItemProps {
  name?: IFieldProps<any, any>['name'];
  required?: boolean;
  validator?: IFieldProps<any, any>['validator'];
  fieldProps?: IFieldProps<any, any>;
  component?: React.ComponentType<any>;
  componentChildren?: React.ReactNode;
  componentProps?: Record<string, any>;
}

export function FormItem({
  name,
  required,
  validator,
  fieldProps,
  component,
  componentChildren,
  componentProps,
  ...props
}: FormItemProps) {
  if (name) {
    return (
      <Field
        name={name}
        decorator={[FormilyFormItem, props]}
        component={[
          component,
          {
            children: componentChildren,
            ...componentProps,
          },
        ]}
        required={required}
        validator={validator}
        {...fieldProps}
      />
    );
  }

  return React.createElement(FormilyFormItem, props);
}

import React from 'react';
import cx from 'classnames';
import { css } from 'coral-system';
import { Field, connect, mapProps } from '@formily/react';
import { Box } from '@music163/foundation';
import { componentsMap } from './components';
import { useFormLayout } from './form-layout';

export interface FormItemProps {
  label: string;
  name: string;
  type: string | React.ComponentType<any>;
  children?: React.ReactNode;
}

export function FormItem(props: FormItemProps) {
  const { label, type, ...others } = props;
  return (
    <Field
      component={[typeof type === 'string' ? componentsMap[type] : type]}
      decorator={[FormItemDecorator]}
      title={label}
      {...others}
    />
  );
}

const FormItemDecorator = connect(
  FormItemControl,
  mapProps((props, field) => {
    if (!field) {
      return props;
    }

    return {
      label: props.label || field.title,
      extra: props.extra || field.description,
    };
  }),
);

const formControlStyle = css`
  &.horizontal {
    display: flex;
    column-gap: 12px;
    align-items: center;
  }

  &.vertical {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
`;

function FormItemControl({ label, extra, children }: any) {
  const layout = useFormLayout({});

  return (
    <Box className={cx('td-formControl', layout.layout)} mb="12px" css={formControlStyle}>
      <Box className="td-formControlLabel" width={layout.labelWidth} textAlign="right">
        {label}
      </Box>
      <Box className="td-formControlMain">{children}</Box>
      <Box className="td-formControlExtra">{extra}</Box>
    </Box>
  );
}

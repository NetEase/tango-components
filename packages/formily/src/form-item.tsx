import React from 'react';
import cx from 'classnames';
import { css } from 'coral-system';
import { Field, connect, mapProps } from '@formily/react';
import { isVoidField } from '@formily/core';
import { Box } from '@music163/foundation';
import { componentsMap } from './components';
import { useFormLayout } from './form-layout';

export interface FormItemProps {
  label: string;
  name: string;
  component: string | React.ComponentType<any>;
  componentProps?: Record<string, any>;
  required?: boolean;
  initialValue?: any;
}

export function FormItem(props: FormItemProps) {
  const { label, component, componentProps = {}, name, ...others } = props;
  if (!name) {
    return <FormItemControl label={label} {...others} />;
  }

  return (
    <Field
      component={[
        typeof component === 'string' ? componentsMap[component] : component,
        componentProps,
      ]}
      decorator={[FormItemDecorator]}
      title={label}
      name={name}
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

    if (isVoidField(field)) {
      return {
        label: props.label || field.title,
        asterisk: props.asterisk,
        extra: props.extra || field.description,
      };
    }

    const takeFeedbackStatus = () => {
      if (field.validating) return 'pending';
      return field.decoratorProps.feedbackStatus || field.validateStatus;
    };
    const takeMessage = () => {
      const split = (messages: any[]) => {
        return messages.reduce((buf, text, index) => {
          if (!text) return buf;
          return index < messages.length - 1 ? buf.concat([text, ', ']) : buf.concat([text]);
        }, []);
      };
      if (field.validating) return;
      if (props.feedbackText) return props.feedbackText;
      if (field.selfErrors.length) return split(field.selfErrors);
      if (field.selfWarnings.length) return split(field.selfWarnings);
      if (field.selfSuccesses.length) return split(field.selfSuccesses);
    };
    const takeAsterisk = () => {
      if (field.required && field.pattern !== 'readPretty') {
        return true;
      }
      if ('asterisk' in props) {
        return props.asterisk;
      }
      return false;
    };
    return {
      label: props.label || field.title,
      feedbackStatus: takeFeedbackStatus(),
      feedbackText: takeMessage(),
      asterisk: takeAsterisk(),
      optionalMarkHidden: field.pattern === 'readPretty' && !('asterisk' in props),
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

  &.error {
    .ant-input-affix-wrapper,
    .ant-input-number {
      border-color: red !important;
    }
  }
`;

export interface FormItemControlProps {
  label?: string;
  extra?: React.ReactNode;
  asterisk?: boolean;
  feedbackStatus?: 'error' | 'warning' | 'success' | 'pending' | (string & {});
  feedbackText?: React.ReactNode;
  children?: React.ReactNode;
}

export function FormItemControl({
  label,
  extra,
  asterisk,
  feedbackStatus,
  feedbackText,
  children,
}: FormItemControlProps) {
  const layout = useFormLayout({});

  return (
    <Box
      className={cx('td-formControl', layout.layout, feedbackStatus)}
      mb="12px"
      css={formControlStyle}
    >
      <Box className="td-formControlLabel" width={layout.labelWidth} textAlign="right">
        {asterisk && (
          <Box as="span" className="td-formControlAsterisk" color="red" mr={4}>
            {'*'}
          </Box>
        )}
        {label}
      </Box>
      <Box className="td-formControlMain">{children}</Box>
      {feedbackText && <Box>{feedbackText}</Box>}
      <Box className="td-formControlExtra">{extra}</Box>
    </Box>
  );
}

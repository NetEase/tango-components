import React from 'react';
import { IFormFeedback } from '@formily/core';
import { observer, useParentForm } from '@formily/react';
import { Button, ButtonProps } from 'antd';

export interface SubmitProps extends ButtonProps {
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => any;
  onSubmit?: (values: any) => any;
  onSubmitSuccess?: (payload: any) => void;
  onSubmitFailed?: (feedbacks: IFormFeedback[]) => void;
}

export const Submit = observer(
  ({
    onSubmit,
    onSubmitFailed,
    onSubmitSuccess,
    children,
    loading,
    onClick,
    ...rest
  }: SubmitProps) => {
    const form = useParentForm();
    return (
      <Button
        htmlType={onSubmit ? 'button' : 'submit'}
        type="primary"
        {...rest}
        loading={loading ?? form.submitting}
        onClick={(e) => {
          onClick?.(e);
          form.submit(onSubmit).then(onSubmitSuccess).catch(onSubmitFailed);
        }}
      >
        {children}
      </Button>
    );
  },
);

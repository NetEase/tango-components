import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import { IFieldResetOptions, IFormFeedback } from '@formily/core';
import { useParentForm } from '@formily/react';

export interface ResetProps extends IFieldResetOptions, ButtonProps {
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => any;
  onResetValidateSuccess?: (payload: any) => void;
  onResetValidateFailed?: (feedbacks: IFormFeedback[]) => void;
}

export const Reset = ({
  forceClear,
  validate,
  onResetValidateSuccess,
  onResetValidateFailed,
  onClick,
  children,
  ...props
}: ResetProps) => {
  const form = useParentForm();
  return (
    <Button
      {...props}
      onClick={(e) => {
        onClick?.(e);
        form
          .reset('*', {
            forceClear,
            validate,
          })
          .then(onResetValidateSuccess)
          .catch(onResetValidateFailed);
      }}
    >
      {children}
    </Button>
  );
};

export default Reset;

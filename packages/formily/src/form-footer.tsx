import React from 'react';
import { Space } from 'antd';
import { FormItemControl } from './form-item';

export function FormFooter({ children }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <FormItemControl label=" ">
      <Space>{children}</Space>
    </FormItemControl>
  );
}

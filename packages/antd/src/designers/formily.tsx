import React from 'react';
import { withDnd } from '@music163/tango-helpers';
import { Form, FormItem, Submit, Reset } from '@music163/formily';
import { ShadowContainer } from './shared';

export const FormilyForm = withDnd({ name: 'FormilyForm' })(({ children }: any) => {
  return <ShadowContainer>{children ? <Form>{children}</Form> : null}</ShadowContainer>;
});

export const FormilyFormItem = withDnd({ name: 'FormilyFormItem' })(FormItem);
export const FormilySubmit = withDnd({ name: 'FormilySubmit', display: 'inline-block' })(Submit);
export const FormilyReset = withDnd({ name: 'FormilyReset', display: 'inline-block' })(Reset);

export {
  FormConsumer as FormilyFormConsumer,
  createForm as createFormilyForm,
} from '@music163/formily';

import { Typography } from 'antd';

export * from 'antd';
export * from '@music163/foundation';
export {
  Form as FormilyForm,
  FormItem as FormilyFormItem,
  FormFooter as FormilyFormFooter,
  Submit as FormilySubmit,
  Reset as FormilyReset,
  createForm as createFormilyForm,
  FormConsumer as FormilyFormConsumer,
} from '@music163/formily';
export { InputNumber } from './input-number';
export { Input, TextArea } from './input';
export * from './page';
export * from './section';
export { Select } from './select';

export const Title = Typography.Title;
export const Paragraph = Typography.Paragraph;

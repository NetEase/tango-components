import { createForm, Form, FormItem, Input } from '@music163/formily';

export default {
  title: 'formily/FormItem',
  component: FormItem,
  tags: ['autodocs'],
};

const form = createForm();

export const Basic = () => {
  return (
    <Form form={form} labelCol={6} wrapperCol={10}>
      <FormItem name="username" label="用户名" component={Input} required />
      <FormItem name="password" label="密码" component={Input} required />
    </Form>
  );
};

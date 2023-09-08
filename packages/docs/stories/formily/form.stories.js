import { createForm, Form, FormItem, Input, Checkbox } from '@music163/formily';

export default {
  title: 'formily/Form',
  component: Form,
  tags: ['autodocs'],
};

const form = createForm();

// 简化后的写法
export const Basic = () => {
  return (
    <Form form={form} labelCol={6} wrapperCol={10}>
      <FormItem name="username" label="用户名" component={Input} required />
      <FormItem name="password" label="密码" component={Input} required />
      <FormItem name="remember" label=" " component={Checkbox} componentChildren="Remember me" />
    </Form>
  );
};

export const VerticalLayout = () => {
  return (
    <Form form={form} layout="vertical">
      <FormItem name="username" label="用户名" component={Input} required />
      <FormItem name="password" label="密码" component={Input} required />
      <FormItem name="remember" component={Checkbox} componentChildren="Remember me" />
    </Form>
  );
};

export const InlineLayout = () => {
  return (
    <Form form={form} layout="inline">
      <FormItem name="username" label="用户名" component={Input} required />
      <FormItem name="password" label="密码" component={Input} required />
      <FormItem name="remember" component={Checkbox} componentChildren="Remember me" />
    </Form>
  );
};

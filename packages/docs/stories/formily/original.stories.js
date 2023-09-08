import {
  createForm,
  Field,
  Form,
  FormItem,
  Select,
  Input,
  Submit,
  FormButtonGroup,
} from '@music163/formily';

export default {
  title: 'formily/原生写法',
  component: Form,
  tags: ['autodocs'],
};

const form = createForm();

// 原生写法
export const Basic = () => {
  return (
    <Form form={form}>
      <Field
        name="aa"
        title="选择框"
        decorator={[FormItem]}
        component={[Select]}
        dataSource={[
          {
            label: '选项1',
            value: 1,
          },
          {
            label: '选项2',
            value: 2,
          },
        ]}
      />
      <Field name="bb" title="输入框" required decorator={[FormItem]} component={[Input]} />
      <FormButtonGroup.FormItem>
        <Submit>查询</Submit>
      </FormButtonGroup.FormItem>
    </Form>
  );
};

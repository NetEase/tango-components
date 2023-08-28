import { Form, FormItem, FormConsumer, Submit, Reset, createForm } from '@music163/formily';
import { Box } from '@music163/foundation';

export default {
  title: 'formily/Form',
  component: Form,
  tags: ['autodocs'],
};

const form = createForm();

export const Basic = () => {
  return (
    <Form form={form}>
      <FormItem name="input" label="输入框" component="Input" required initialValue="Hello world" />
      <FormItem
        name="select"
        label="选择框"
        component="Select"
        componentProps={{
          options: [
            { label: '选项1', value: 1 },
            { label: '选项2', value: 2 },
          ],
          style: {
            width: 200,
          }
        }}
        required
      />
      <FormConsumer>
        {() => (
          <Box mb={20} p={5} border={'1px dashed red'}>
            实时响应：{form.values.input}
          </Box>
        )}
      </FormConsumer>
      <FormItem label=" ">
        <Submit onSubmit={console.log}>提交</Submit>
        <Reset>重置</Reset>
      </FormItem>
    </Form>
  );
};

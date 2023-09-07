import {
  Form,
  FormItem,
  FormFooter,
  FormConsumer,
  Submit,
  Reset,
  createForm,
} from '@music163/formily';
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
      <FormItem name="switch" label="开关" component="Switch" required />
      <FormItem
        name="radio-group"
        label="单选框组"
        component="RadioGroup"
        componentProps={{
          options: [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' },
          ],
        }}
        required
      />
      <FormItem
        name="checkbox-group"
        label="多选框组"
        component="CheckboxGroup"
        componentProps={{
          options: [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' },
          ],
        }}
        required
      />
      <FormItem name="input" label="输入框" component="Input" required initialValue="Hello world" />
      <FormItem name="text-area" label="文本域" component="TextArea" required />
      <FormItem name="input-number" label="数字输入框" component="InputNumber" required />
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
          },
        }}
        required
      />
      <FormItem
        name="cascader"
        label="级联选择"
        component="Cascader"
        componentProps={{
          options: [
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                  children: [
                    {
                      value: 'xihu',
                      label: 'West Lake',
                    },
                  ],
                },
              ],
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: 'Zhong Hua Men',
                    },
                  ],
                },
              ],
            },
          ],
        }}
        required
      />
      <FormItem
        name="tree-select"
        label="树选择"
        component="TreeSelect"
        componentProps={{
          style: { width: 200 },
          treeData: [
            {
              value: 'parent 1',
              title: 'parent 1',
              children: [
                {
                  value: 'parent 1-0',
                  title: 'parent 1-0',
                  children: [
                    {
                      value: 'leaf1',
                      title: 'leaf1',
                    },
                    {
                      value: 'leaf2',
                      title: 'leaf2',
                    },
                  ],
                },
                {
                  value: 'parent 1-1',
                  title: 'parent 1-1',
                  children: [
                    {
                      value: 'leaf3',
                      title: <b style={{ color: '#08c' }}>leaf3</b>,
                    },
                  ],
                },
              ],
            },
          ],
        }}
        required
      />
      <FormItem name="time-picker" label="时间选择器" component="TimePicker" required />
      <FormItem
        name="time-range-picker"
        label="时间范围选择器"
        component="TimeRangePicker"
        required
      />
      <FormItem name="date-picker" label="日期选择框" component="DatePicker" required />
      <FormItem
        name="date-range-picker"
        label="日期范围选择框"
        component="DateRangePicker"
        required
      />
      <FormConsumer>
        {() => (
          <Box mb={20} p={5} border={'1px dashed red'}>
            实时响应：{form.values.input}
          </Box>
        )}
      </FormConsumer>
      <FormFooter>
        <Submit onSubmit={console.log}>提交</Submit>
        <Reset>重置</Reset>
      </FormFooter>
    </Form>
  );
};

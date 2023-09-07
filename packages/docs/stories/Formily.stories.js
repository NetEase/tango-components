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
  title: 'formily/Form',
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

// 简化后的写法
export const Simple = () => {
  return (
    <Form form={form}>
      <FormItem name="username" label="用户名" component={Input} required />
      <FormItem name="password" label="密码" component={Input} required />
      {/* <FormItem name="remember" component="Checkbox" componentChildren="Remember me" /> */}
    </Form>
  );
};

// export const VerticalLayout = () => {
//   return (
//     <Form layout="vertical">
//       <FormItem label="Field A" component="Input" />
//       <FormItem label="Field B" component="Input" />
//     </Form>
//   );
// };

// export const InlineLayout = () => {
//   return (
//     <Form layout="inline">
//       <FormItem label="Field A" component="Input" />
//       <FormItem label="Field B" component="Input" />
//     </Form>
//   );
// };

// export const List = () => {
//   return (
//     <Form form={form}>
//       <FormItem name="switch" label="开关" component="Switch" required />
//       <FormItem
//         name="radio-group"
//         label="单选框组"
//         component="RadioGroup"
//         componentProps={{
//           options: [
//             { label: 'Apple', value: 'Apple' },
//             { label: 'Pear', value: 'Pear' },
//             { label: 'Orange', value: 'Orange' },
//           ],
//         }}
//         required
//       />
//       <FormItem
//         name="checkbox-group"
//         label="多选框组"
//         component="CheckboxGroup"
//         componentProps={{
//           options: [
//             { label: 'Apple', value: 'Apple' },
//             { label: 'Pear', value: 'Pear' },
//             { label: 'Orange', value: 'Orange' },
//           ],
//         }}
//         required
//       />
//       <FormItem name="input" label="输入框" component="Input" required initialValue="Hello world" />
//       <FormItem name="text-area" label="文本域" component="TextArea" required />
//       <FormItem name="input-number" label="数字输入框" component="InputNumber" required />
//       <FormItem
//         name="select"
//         label="选择框"
//         component="Select"
//         componentProps={{
//           options: [
//             { label: '选项1', value: 1 },
//             { label: '选项2', value: 2 },
//           ],
//           style: {
//             width: 200,
//           },
//         }}
//         required
//       />
//       <FormItem
//         name="cascader"
//         label="级联选择"
//         component="Cascader"
//         componentProps={{
//           options: [
//             {
//               value: 'zhejiang',
//               label: 'Zhejiang',
//               children: [
//                 {
//                   value: 'hangzhou',
//                   label: 'Hangzhou',
//                   children: [
//                     {
//                       value: 'xihu',
//                       label: 'West Lake',
//                     },
//                   ],
//                 },
//               ],
//             },
//             {
//               value: 'jiangsu',
//               label: 'Jiangsu',
//               children: [
//                 {
//                   value: 'nanjing',
//                   label: 'Nanjing',
//                   children: [
//                     {
//                       value: 'zhonghuamen',
//                       label: 'Zhong Hua Men',
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         }}
//         required
//       />
//       <FormItem
//         name="tree-select"
//         label="树选择"
//         component="TreeSelect"
//         componentProps={{
//           style: { width: 200 },
//           treeData: [
//             {
//               value: 'parent 1',
//               title: 'parent 1',
//               children: [
//                 {
//                   value: 'parent 1-0',
//                   title: 'parent 1-0',
//                   children: [
//                     {
//                       value: 'leaf1',
//                       title: 'leaf1',
//                     },
//                     {
//                       value: 'leaf2',
//                       title: 'leaf2',
//                     },
//                   ],
//                 },
//                 {
//                   value: 'parent 1-1',
//                   title: 'parent 1-1',
//                   children: [
//                     {
//                       value: 'leaf3',
//                       title: <b style={{ color: '#08c' }}>leaf3</b>,
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         }}
//         required
//       />
//       <FormItem name="time-picker" label="时间选择器" component="TimePicker" required />
//       <FormItem
//         name="time-range-picker"
//         label="时间范围选择器"
//         component="TimeRangePicker"
//         required
//       />
//       <FormItem name="date-picker" label="日期选择框" component="DatePicker" required />
//       <FormItem
//         name="date-range-picker"
//         label="日期范围选择框"
//         component="DateRangePicker"
//         required
//       />
//       <FormConsumer>
//         {() => (
//           <Box mb={20} p={5} border={'1px dashed red'}>
//             实时响应：{form.values.input}
//           </Box>
//         )}
//       </FormConsumer>
//       <FormFooter>
//         <Submit onSubmit={console.log}>提交</Submit>
//         <Reset>重置</Reset>
//       </FormFooter>
//     </Form>
//   );
// };

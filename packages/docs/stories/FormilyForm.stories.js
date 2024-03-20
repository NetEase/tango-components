import {
  FormilyForm,
  FormilyFormItem,
  FormilySubmit,
  FormilyReset,
  FormilyFormFooter,
} from '@music163/antd';

export default {
  title: 'antd/Formily',
  component: FormilyForm,
  tags: ['autodocs'],
};

export const Basic = () => {
  return (
    <FormilyForm labelCol={6} wrapperCol={10}>
      <FormilyFormItem
        name="input"
        label="输入框"
        component="Input"
        required
        initialValue="Hello world"
      />
      <FormilyFormItem
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
      <FormilyFormFooter>
        <FormilySubmit onSubmit={console.log}>提交</FormilySubmit>
        <FormilyReset>重置</FormilyReset>
      </FormilyFormFooter>
    </FormilyForm>
  );
};

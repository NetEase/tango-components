import {
  createForm,
  Form,
  FormConsumer,
  FormItem,
  FormFooter,
  FormButtonGroup,
  Submit,
  Input,
  Checkbox,
  NumberPicker,
  Select,
  onFieldReact,
  action,
} from '@music163/formily';

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
      <FormFooter>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormFooter>
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

export const Consumer = () => {
  return (
    <Form form={form}>
      <FormItem name="username" label="用户名" component={Input} required />
      <FormConsumer>
        {() => (
          <div
            style={{
              marginBottom: 20,
              padding: 5,
              border: '1px dashed #666',
            }}
          >
            实时响应：{form.values.username}
          </div>
        )}
      </FormConsumer>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </Form>
  );
};

export const Validator = () => {
  return (
    <Form form={form} labelCol={6} wrapperCol={10}>
      <FormItem name="required1" label="必填1(required)" component={Input} required />
      <FormItem
        name="required2"
        label="必填2(validator)"
        component={Input}
        validator={{ required: true }}
      />
      <FormItem
        name="required3"
        label="必填2(validatorList)"
        component={Input}
        validator={[{ required: true }]}
      />
      <FormItem
        name="max1"
        label="max(>5报错)"
        component={NumberPicker}
        validator={{ maximum: 5 }}
      />
      <FormItem
        name="max2"
        label="max(>5报错)"
        component={NumberPicker}
        validator={[{ maximum: 5 }]}
      />
      <FormItem
        name="max3"
        label="max(>=5报错)"
        component={NumberPicker}
        validator={{ exclusiveMaximum: 5 }}
      />
      <FormItem
        name="min"
        label="min(<=5报错)"
        component={NumberPicker}
        validator={{ minimum: 5 }}
      />
      <FormItem
        name="exclusiveMinimum"
        label="exclusiveMinimum(<=5报错)"
        component={NumberPicker}
        validator={{ exclusiveMinimum: 5 }}
      />
      <FormItem name="len" label="len(5)" component={Input} validator={{ len: 5 }} />
      <Submit onSubmit={console.log}>提交</Submit>
    </Form>
  );
};

const asyncDataSource = (pattern, service) => {
  onFieldReact(pattern, (field) => {
    field.loading = true;
    service(field).then(
      action.bound((data) => {
        field.dataSource = data;
        field.loading = false;
      }),
    );
  });
};

export const AsyncData = () => {
  const from1 = createForm({
    effects: () => {
      asyncDataSource('select', async (field) => {
        const linkage = field.query('linkage').get('value');
        if (!linkage) return [];
        return new Promise((resolve) => {
          setTimeout(() => {
            if (linkage === 1) {
              resolve([
                {
                  label: 'AAA',
                  value: 'aaa',
                },
                {
                  label: 'BBB',
                  value: 'ccc',
                },
              ]);
            } else if (linkage === 2) {
              resolve([
                {
                  label: 'CCC',
                  value: 'ccc',
                },
                {
                  label: 'DDD',
                  value: 'ddd',
                },
              ]);
            }
          }, 1500);
        });
      });
    },
  });
  return (
    <Form form={from1} labelCol={6} wrapperCol={10}>
      <FormItem
        name="linkage"
        label="联动选择狂"
        component={Select}
        componentProps={{
          options: [
            { label: '发请求1', value: 1 },
            { label: '发请求2', value: 2 },
          ],
        }}
      />
      <FormItem name="select" label="异步选择框" component={Select} />
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </Form>
  );
};

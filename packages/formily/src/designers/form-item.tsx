import { withDnd } from '@music163/tango-helpers';
import { FormItem as BaseFormItem } from '../form-item';

export const FormItem = withDnd({
  name: 'FormItem',
})(BaseFormItem);

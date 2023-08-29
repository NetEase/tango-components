import { withDnd } from '@music163/tango-helpers';
import { Form as BaseForm } from '../form';

export const Form = withDnd({
  name: 'Form',
})(BaseForm);

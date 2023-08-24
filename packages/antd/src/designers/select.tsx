import { withDnd } from '@music163/tango-helpers';
import { Select as BaseSelect } from '../components';

export const Select = withDnd({
  name: 'Select',
})(BaseSelect);


import { withDnd } from '@music163/tango-helpers';
import { InputNumber as BaseInputNumber } from '../components';

export const InputNumber = withDnd({
  name: 'InputNumber',
  overrideProps: { readOnly: true },
})(BaseInputNumber);

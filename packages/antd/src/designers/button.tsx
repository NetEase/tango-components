import { withDnd } from '@music163/tango-helpers';
import { Button as BaseButton } from '../components';

export const Button = withDnd({
  name: 'Button',
  display: 'inline-block',
})(BaseButton);

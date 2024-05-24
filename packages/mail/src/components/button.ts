import { defineComponent } from '@music163/tango-boot';
import { Button as EButton } from '@react-email/components';

export const Button = defineComponent(EButton, {
  name: 'Button',
  designerConfig: {
    defaultProps: {
      onClick(e: any) {
        e.preventDefault();
      },
    },
  },
});

import { defineComponent } from '@music163/tango-boot';
import { Link as Comp } from '@react-email/components';

export const Link = defineComponent(Comp, {
  name: 'Link',
  designerConfig: {
    defaultProps: {
      onClick(e: any) {
        e.preventDefault();
      },
    },
  },
});

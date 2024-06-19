import { defineComponent } from '@music163/tango-boot';
import { Column as Comp } from '@react-email/components';

export const Column = defineComponent(Comp, {
  name: 'Column',
  designerConfig: {
    defaultProps: {
      style: {
        border: '1px dashed #999',
      },
    },
  },
});

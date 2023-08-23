import type { CollectorProps } from '@music163/tango-boot';

export type BootCollectorProps = Pick<
  CollectorProps,
  'id' | 'model' | 'defaultValue' | 'onValueChange'
>;

import React, { forwardRef } from 'react';
import { Select as AntSelect } from 'antd';
import { Collector } from '@music163/tango-boot';
import { mergeRefs } from '@music163/foundation';

export const Select = forwardRef((props, ref) => (
  <Collector
    {...props}
    render={({ value, setValue, ref: tangoRef }) => (
      <AntSelect ref={mergeRefs(ref, tangoRef)} {...props} value={value} onChange={setValue} />
    )}
  />
));

Select.displayName = 'Select';

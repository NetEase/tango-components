import React, { forwardRef } from 'react';
import { Collector } from '@music163/tango-boot';
import { InputNumber as AntInputNumber } from 'antd';
import { mergeRefs } from '@music163/foundation';

export const InputNumber = forwardRef((props, ref) => {
  return (
    <Collector
      {...props}
      render={({ value, setValue, ref: tangoRef }) => {
        return (
          <AntInputNumber
            ref={mergeRefs(ref, tangoRef)}
            {...props}
            value={value}
            onChange={setValue}
          />
        );
      }}
    />
  );
});

InputNumber.displayName = 'InputNumber';

import React, { forwardRef } from 'react';
import { Input as AntInput } from 'antd';
import { Collector } from '@music163/tango-boot';
import { mergeRefs } from '@music163/foundation';

export const Input = forwardRef((props, ref) => {
  return (
    <Collector
      {...props}
      render={({ value, setValue, ref: tangoRef }) => (
        <AntInput
          ref={mergeRefs(ref, tangoRef)}
          {...props}
          value={value}
          onChange={(e) => {
            const next = e.target.value;
            setValue(next);
          }}
        />
      )}
    />
  );
});

Input.displayName = 'Input';

export const TextArea = forwardRef((props, ref) => (
  <Collector
    {...props}
    render={({ value, setValue, ref: tangoRef }) => (
      <AntInput.TextArea
        ref={mergeRefs(ref, tangoRef)}
        {...props}
        value={value}
        onChange={(e) => {
          const next = e.target.value;
          setValue(next);
        }}
      />
    )}
  />
));

TextArea.displayName = 'TextArea';

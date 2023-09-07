import { mapProps } from '@formily/react';
import { TimePicker as AntdTimePicker } from 'antd';
import { TimePickerProps as AntdTimePickerProps, TimeRangePickerProps } from 'antd/lib/time-picker';
import { formatMomentValue, momentable } from '../__builtins__';
import { register } from '../register';

type ComposedTimePicker = React.FC<React.PropsWithChildren<AntdTimePickerProps>> & {
  RangePicker?: React.FC<React.PropsWithChildren<TimeRangePickerProps>>;
};

const mapTimeFormat = function () {
  return (props: any) => {
    const format = props.format || 'HH:mm:ss';
    const onChange = props.onChange;
    return {
      ...props,
      format,
      value: momentable(props.value, format),
      onChange: (value: moment.Moment | moment.Moment[]) => {
        if (onChange) {
          onChange(formatMomentValue(value, format));
        }
      },
    };
  };
};

export const TimePicker: ComposedTimePicker = register(
  'TimePicker',
  AntdTimePicker,
  mapProps(mapTimeFormat()),
);

export const TimeRangePicker = register(
  'TimeRangePicker',
  AntdTimePicker.RangePicker,
  mapProps(mapTimeFormat()),
);

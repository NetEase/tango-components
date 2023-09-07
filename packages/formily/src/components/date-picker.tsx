import moment from 'moment';
import { mapProps } from '@formily/react';
import { DatePicker as AntdDatePicker } from 'antd';
import { DatePickerProps as AntdDatePickerProps, RangePickerProps } from 'antd/lib/date-picker';
import { formatMomentValue, momentable } from '../__builtins__';
import { register } from '../register';

type ComposedDatePicker = React.FC<React.PropsWithChildren<AntdDatePickerProps>> & {
  RangePicker?: React.FC<React.PropsWithChildren<RangePickerProps>>;
};

const mapDateFormat = function () {
  const getDefaultFormat = (props: any) => {
    if (props.picker === 'month') {
      return 'YYYY-MM';
    } else if (props.picker === 'quarter') {
      return 'YYYY-\\QQ';
    } else if (props.picker === 'year') {
      return 'YYYY';
    } else if (props.picker === 'week') {
      return 'gggg-wo';
    }
    return props.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
  };
  return (props: any) => {
    const format = props.format || getDefaultFormat(props);
    const onChange = props.onChange;
    return {
      ...props,
      format,
      value: momentable(props.value, format === 'gggg-wo' ? 'gggg-ww' : format),
      onChange: (value: moment.Moment | moment.Moment[]) => {
        if (onChange) {
          onChange(formatMomentValue(value, format));
        }
      },
    };
  };
};

export const DatePicker: ComposedDatePicker = register(
  'DatePicker',
  AntdDatePicker,
  mapProps(mapDateFormat()),
);

export const DateRangePicker = register(
  'DateRangePicker',
  AntdDatePicker.RangePicker,
  mapProps(mapDateFormat()),
);

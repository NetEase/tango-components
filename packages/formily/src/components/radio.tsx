import { connect } from '@formily/react';
import { Radio as AntdRadio } from 'antd';
import { RadioProps, RadioGroupProps } from 'antd/lib/radio';

type ComposedRadio = React.FC<React.PropsWithChildren<RadioProps>> & {
  Group?: React.FC<React.PropsWithChildren<RadioGroupProps>>;
  __ANT_RADIO?: boolean;
};

export const Radio: ComposedRadio = connect(AntdRadio);

Radio.__ANT_RADIO = true;

export const RadioGroup = connect(AntdRadio.Group);

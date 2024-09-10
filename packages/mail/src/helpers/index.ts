import { IComponentProp } from '@music163/tango-helpers';

export const getStyle = (style?: React.CSSProperties) => {
  return {
    ...style,
  };
};

export const STYLE_PROPS: IComponentProp[] = [
  {
    name: 'style',
    title: '样式',
    setter: 'codeSetter',
    setterProps: {
      expressionType: 'cssObject',
    },
    group: 'style',
  },
  {
    name: 'className',
    title: '类名',
    setter: 'classNameSetter',
    group: 'style',
    tip: '支持 tailwindcss 的类名',
    docs: 'https://tailwindcss.com/docs/customizing-colors',
  },
];

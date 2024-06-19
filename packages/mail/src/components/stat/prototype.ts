import { ComponentPrototypeType } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../../helpers';

export const Stat: ComponentPrototypeType = {
  name: 'Stat',
  title: '统计',
  package: '@music163/tango-mail',
  icon: 'icon-stat',
  type: 'element',
  props: [
    {
      name: 'label',
      title: '标签',
      setter: 'textSetter',
      initValue: '点击',
    },
    {
      name: 'number',
      title: '指标数值',
      setter: 'textSetter',
      initValue: '1,000',
    },
    {
      name: 'helpText',
      title: '辅助文本',
      setter: 'textSetter',
      initValue: '下降 5%',
    },
    ...STYLE_PROPS,
  ],
};

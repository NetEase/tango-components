import { ComponentPrototypeType } from '@music163/tango-helpers';

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
    {
      name: 'style',
      title: '样式',
      setter: 'codeSetter',
    },
    {
      name: 'className',
      title: '类名',
      setter: 'textSetter',
    },
  ],
};

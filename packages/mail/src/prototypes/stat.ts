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
    },
    {
      name: 'number',
      title: '指标数值',
      setter: 'textSetter',
    },
    {
      name: 'helpText',
      title: '辅助文本',
      setter: 'textSetter',
    },
    {
      name: 'style',
      title: '样式',
      setter: 'codeSetter',
    },
  ],
};

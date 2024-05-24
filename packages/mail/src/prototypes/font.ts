import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Font: ComponentPrototypeType = {
  name: 'Font',
  title: '字体',
  package: '@music163/tango-mail',
  icon: 'icon-anniu',
  type: 'element',
  props: [
    {
      name: 'fontFamily',
      title: '字体',
      setter: 'textSetter',
    },
    {
      name: 'webFont',
      title: 'web 字体',
      props: [
        {
          name: 'url',
          title: 'WebFont url',
          setter: 'textSetter',
        },
        {
          name: 'format',
          title: '格式',
          setter: 'textSetter',
        },
      ]
    },
    {
      name: 'style',
      title: '样式',
      setter: 'codeSetter',
    },
  ],
};

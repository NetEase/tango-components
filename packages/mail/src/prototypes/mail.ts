import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Email: ComponentPrototypeType = {
  name: 'Email',
  title: '邮件',
  package: '@music163/tango-mail',
  icon: 'icon-edm',
  type: 'page',
  props: [
    {
      name: 'title',
      title: '标题',
      setter: 'textAreaSetter',
    },
    {
      name: 'preview',
      title: '邮件的预览文本',
      setter: 'textAreaSetter',
    },
    {
      name: 'bg',
      title: '背景色',
      setter: 'colorSetter',
    },
    {
      name: 'style',
      title: '样式',
      setter: 'codeSetter',
    },
    {
      name: 'fontConfig',
      title: '字体配置',
      props: [
        {
          name: 'fontFamily',
          title: '字体',
          setter: 'textSetter',
        },
        {
          name: 'fallbackFontFamily',
          title: '备用字体',
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
          ],
        },
        {
          name: 'fontWeight',
          title: '字重',
          setter: 'numberSetter',
        },
        {
          name: 'fontStyle',
          title: '字体样式',
          setter: 'codeSetter',
        },
      ],
    },
    {
      name: 'tailwindConfig',
      title: 'tailwindcss 配置',
      setter: 'codeSetter',
      tip: '请参考 tailwindcss 配置文档',
      docs: 'https://tailwindcss.com/docs/configuration',
    },
    {
      name: 'lang',
      title: '语言',
      setter: 'textSetter',
    },
    {
      name: 'dir',
      title: '文本方向',
      setter: 'choiceSetter',
      options: [
        { value: 'ltr', label: 'ltr' },
        { value: 'rtl', label: 'rtl' },
      ],
    },
  ],
};

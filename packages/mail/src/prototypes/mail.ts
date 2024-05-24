import { ComponentPrototypeType } from '@music163/tango-helpers';

export const EMail: ComponentPrototypeType = {
  name: 'EMail',
  title: '邮件',
  package: '@music163/tango-mail',
  icon: 'icon-edm',
  hasChildren: true,
  type: 'page',
  props: [
    {
      name: 'preview',
      title: '邮件的预览文本',
      setter: 'textSetter',
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

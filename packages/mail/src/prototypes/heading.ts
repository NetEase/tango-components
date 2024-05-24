import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Heading: ComponentPrototypeType = {
  name: 'Heading',
  title: '标题',
  package: '@music163/tango-mail',
  icon: 'icon-anniu',
  type: 'element',
  props: [
    {
      name: 'children',
      title: '文案',
      setter: 'textSetter',
      initValue: 'Heading',
    },
    {
      name: 'as',
      title: '标题级别',
      setter: 'choiceSetter',
      options: [
        { value: 'h1', label: 'H1' },
        { value: 'h2', label: 'H2' },
        { value: 'h3', label: 'H3' },
        { value: 'h4', label: 'H4' },
        { value: 'h5', label: 'H5' },
        { value: 'h6', label: 'H6' },
      ],
    },
    {
      name: 'style',
      title: '样式',
      setter: 'codeSetter',
    },
  ],
};

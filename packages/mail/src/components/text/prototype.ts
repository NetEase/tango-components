import { ComponentPrototypeType } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../../helpers';

export const Heading: ComponentPrototypeType = {
  name: 'Heading',
  title: '标题',
  package: '@music163/tango-mail',
  icon: 'icon-header',
  type: 'element',
  props: [
    {
      name: 'children',
      title: '文案',
      setter: 'textAreaSetter',
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
      name: 'mt',
      title: '上边距',
      setter: 'codeSetter',
    },
    {
      name: 'mb',
      title: '下边距',
      setter: 'codeSetter',
    },
    ...STYLE_PROPS,
  ],
};

export const Text: ComponentPrototypeType = {
  name: 'Text',
  title: '文本',
  package: '@music163/tango-mail',
  icon: 'icon-text',
  type: 'element',
  props: [
    {
      name: 'children',
      title: '文案',
      setter: 'textAreaSetter',
      initValue: 'Text',
    },
    {
      name: 'isTruncate',
      title: '避免文本换行',
      setter: 'boolSetter',
    },
    {
      name: 'color',
      title: '文本色',
      setter: 'colorSetter',
    },
    {
      name: 'fontSize',
      title: '文本大小',
      setter: 'numberSetter',
    },
    ...STYLE_PROPS,
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../helpers';

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
    ...STYLE_PROPS,
  ],
};

import { IComponentPrototype } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../../helpers';

export const Badge: IComponentPrototype = {
  name: 'Badge',
  title: '标签',
  package: '@music163/tango-mail',
  icon: 'icon-badge',
  type: 'element',
  props: [
    {
      name: 'children',
      title: '内容',
      setter: 'textSetter',
      initValue: '标签',
    },
    {
      name: 'color',
      title: '颜色',
      setter: 'selectPicker',
      options: [
        { label: '灰色', value: 'gray' },
        { label: '蓝色', value: 'blue' },
        { label: '红色', value: 'red' },
        { label: '绿色', value: 'green' },
        { label: '黄色', value: 'yellow' },
        { label: '紫色', value: 'purple' },
        { label: '靛蓝', value: 'indigo' },
        { label: '粉色', value: 'pink' },
      ],
    },
    {
      name: 'showBorder',
      title: '显示边框',
      setter: 'boolSetter',
    },
    {
      name: 'isPill',
      title: '胶囊样式',
      setter: 'boolSetter',
    },
    ...STYLE_PROPS,
  ],
};

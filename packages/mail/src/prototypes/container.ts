import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Container: ComponentPrototypeType = {
  name: 'Container',
  title: '容器',
  package: '@music163/tango-mail',
  icon: 'icon-kuangjia',
  help: '容器用于包裹内容',
  type: 'container',
  props: [
    {
      name: 'style',
      title: '样式',
      setter: 'expressionSetter',
    },
  ],
}
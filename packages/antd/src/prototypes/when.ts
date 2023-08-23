import { ComponentPrototypeType } from '@music163/tango-helpers';

export const When: ComponentPrototypeType = {
  title: 'When',
  name: 'When',
  exportType: 'namedExport',
  icon: 'icon-shitu',
  type: 'container',
  package: '@music163/antd',
  help: '创建一个条件执行容器，当条件为真时，渲染子节点。',
  hasChildren: true,
  initChildren: '',
  props: [
    {
      name: 'test',
      title: '条件',
      setter: 'expressionSetter',
      disableVariableSetter: true,
      tip: '设计模式下组件始终展示',
    },
  ],
};

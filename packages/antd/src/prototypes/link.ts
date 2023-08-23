import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Link: ComponentPrototypeType = {
  name: 'Link',
  title: '链接',
  exportType: 'namedExport',
  icon: 'icon-link-button',
  type: 'element',
  package: '@music163/antd',
  help: '创建一个链接文本，支持跳转到指定的锚点地址。',
  hasChildren: true,
  props: [
    ...StylePrototypes,
    {
      name: 'children',
      title: '文本内容',
      setter: 'textSetter',
      initValue: '简单文本',
    },
    {
      name: 'disabled',
      title: '是否禁用',
      setter: 'boolSetter',
    },
    {
      name: 'to',
      title: '路由地址',
      tip: '需要打开的路由地址，也可设置为 http 链接地址，当设置为 http 链接地址后，路由跳转不生效',
      setter: 'textSetter',
    },
    {
      name: 'params',
      title: '路由参数',
      tip: '打开路由时，url 后缀拼接的参数',
      setter: 'enumSetter',
    },
    {
      name: 'target',
      title: '目标类型',
      setter: 'choiceSetter',
      options: [
        { label: '新页面', value: '_blank' },
        { label: '当前页面', value: '_self' },
      ],
      getVisible: (form) => {
        const to = form.getValue('to') || '';

        // 如果是链接则打开
        return to.replace(/https?:/, '').startsWith('//');
      },
    },
  ],
};

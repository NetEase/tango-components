import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Modal: ComponentPrototypeType = {
  title: '弹窗',
  name: 'Modal',
  exportType: 'namedExport',
  icon: 'icon-tanchuang',
  type: 'container',
  package: '@music163/antd',
  help: '需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。',
  hasChildren: true,
  initChildren: '',
  props: [
    {
      name: 'id',
      title: '弹窗 ID',
      tip: '可以借助 tango.openModal(id)/closeModal(id) 轻松唤起或关闭弹窗',
      setter: 'textSetter',
      autoInitValue: true,
    },
    {
      name: 'title',
      title: '标题',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'okText',
      title: '确认按钮文字',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'cancelText',
      title: '取消按钮文字',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'onOk',
      title: '点击确定回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onCancel',
      title: '点击取消回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'footer',
      title: '弹层页脚',
      setter: 'jsxSetter',
    },
    {
      name: 'confirmLoading',
      title: '确认按钮loading',
      setter: 'boolSetter',
    },
    {
      name: 'width',
      title: '宽度',
      setter: 'numberSetter',
    },
    {
      name: 'destroyOnClose',
      title: '关闭后销毁子元素',
      tip: '默认关闭后状态不会自动清空, 如果希望每次打开都是新内容，请设置 destroyOnClose',
      setter: 'boolSetter',
    },
    {
      name: 'visible',
      title: '显示',
      tip: '不建议使用，给弹窗绑定id即可控制弹窗开关',
      setter: 'boolSetter',
      group: 'basic',
    },
    ...StylePrototypes,
    {
      name: 'maskClosable',
      title: '点击蒙层允许关闭',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'afterClose',
      title: '完全关闭后的回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'mask',
      title: '展示遮罩',
      setter: 'boolSetter',
      group: 'advanced',
      defaultValue: true,
    },
    {
      name: 'keyboard',
      title: '是否支持键盘 esc 关闭',
      setter: 'boolSetter',
      group: 'advanced',
      defaultValue: true,
    },
    {
      name: 'forceRender',
      title: '强制渲染Modal',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'zIndex',
      title: '设置 Modal 的 z-index',
      setter: 'numberSetter',
      group: 'advanced',
      defaultValue: 1000,
    },
  ],
  rules: {
    canMoveIn(incomingName: string) {
      return !(incomingName === Modal.name);
    },
  },
};

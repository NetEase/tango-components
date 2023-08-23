import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Timeline: ComponentPrototypeType = {
  name: 'Timeline',
  title: '时间轴',
  package: '@music163/antd',
  icon: 'icon-shijianzhou',
  type: 'element',
  help: '垂直展示的时间流信息，用于一系列信息需按时间排列时',
  hasChildren: true,
  childrenName: 'TimelineItem',
  initChildren: `<TimelineItem>阶段1</TimelineItem><TimelineItem>阶段2</TimelineItem><TimelineItem>阶段3</TimelineItem>`,
  relatedImports: ['TimelineItem'],
  props: [
    ...StylePrototypes,
    {
      name: 'mode',
      title: '相对位置',
      tip: '时间轴和内容的相对位置',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'left', value: 'left' },
          { label: 'alternate', value: 'alternate' },
          { label: 'right', value: 'right' },
        ],
      },
    },
    {
      name: 'pending',
      title: '幽灵节点',
      tip: '指定最后一个幽灵节点内容',
      setter: 'boolSetter',
    },
    {
      name: 'pendingDot',
      title: '幽灵节点时间图点',
      tip: '当最后一个幽灵节点存在时，指定其时间图点',
      setter: 'iconSetter',
    },
    {
      name: 'reverse',
      title: '节点排序',
      setter: 'boolSetter',
    },
  ],
};

export const TimelineItem: ComponentPrototypeType = {
  name: 'TimelineItem',
  title: '时间轴',
  package: '@music163/antd',
  icon: 'icon-shijianzhouitem',
  type: 'element',
  hasChildren: true,
  initChildren: '<Placeholder text="放置替换" />',
  relatedImports: ['Placeholder'],
  props: [
    ...StylePrototypes,
    {
      name: 'color',
      title: '指定圆圈颜色',
      setter: 'colorSetter',
    },
    { name: 'dot', title: '自定义时间轴点', setter: 'iconSetter' },
    { name: 'label', title: '设置标签', setter: 'expressionSetter' },
    {
      name: 'position',
      title: '自定义节点位置',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'left', value: 'left' },
          { label: 'right', value: 'right' },
        ],
      },
    },
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';

const getRender = (tpl: string) => `{(item, index) => (${tpl})}`;

const renderOptions = [
  { label: '取消自定义', value: '' },
  {
    label: '自定义区域',
    value: 'Box',
    render: getRender('<Box></Box>'),
    relatedImports: ['Box'],
  },
  {
    label: '标签',
    value: 'Tag',
    render: getRender('<Tag>tag</Tag>'),
    relatedImports: ['Tag'],
  },
  {
    label: '图片',
    value: 'Image',
    render: getRender('<Image width={150} src="https://picsum.photos/100" />'),
    relatedImports: ['Image'],
  },
];

export const Each: ComponentPrototypeType = {
  name: 'Each',
  title: '循环渲染',
  package: '@music163/antd',
  help: '用于快速循环渲染一组数据。',
  icon: 'icon-xunhuan',
  type: 'element',
  props: [
    {
      name: 'options',
      title: '数据源',
      setter: 'expressionSetter',
      placeholder: '{["A", "B"]}',
    },
    {
      name: 'render',
      title: '渲染器',
      setter: 'renderPropsSetter',
      options: renderOptions,
      autoCompleteOptions: ['(item, index) => { return null; }'],
    },
  ],
};

import { ComponentPrototypeType } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from './common';

export const TreeSelect: ComponentPrototypeType = {
  name: 'TreeSelect',
  title: '树选择',
  icon: 'icon-shuxingjiegou',
  type: 'element',
  package: '@music163/antd',
  help: '树型选择控件，类似 Select 的选择控件，可选择的数据结构是一个树形结构时使用',
  hasChildren: true,
  childrenName: 'TreeNode',
  relatedImports: ['TreeNode'],
  props: [
    ...StylePrototypes,
    ...InstancePrototypes,
    {
      name: 'treeData',
      title: '数据源',
      setter: 'expressionSetter',
      group: 'basic',
      initValue: [
        {
          title: 'Node1',
          value: '0-0',
          children: [
            {
              title: 'Child Node1',
              value: '0-0-1',
            },
            {
              title: 'Child Node2',
              value: '0-0-2',
            },
          ],
        },
        {
          title: 'Node2',
          value: '0-1',
        },
      ],
    },
    {
      name: 'fieldNames',
      title: '数据源的字段映射',
      tip: '当您传入的数据源的字段不是组件期望的字段时，可以使用该属性进行自定义映射',
      props: [
        {
          name: 'label',
          title: '标签',
          setter: 'textSetter',
        },
        {
          name: 'value',
          title: '值',
          setter: 'textSetter',
        },
        {
          name: 'children',
          title: '子结点',
          setter: 'textSetter',
        },
      ],
    },
    {
      name: 'allowClear',
      title: '是否显示清除按钮',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'isPreview',
      title: '预览态',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'renderPreview',
      title: '自定义预览态渲染',
      tip: '格式：(props) => React.ReactNode',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'placeholder',
      title: '选择框默认文字',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'value',
      title: '当前选中的条目',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'onChange',
      title: '值变化时回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(value, label, extra)=>{}'],
    },
    {
      name: 'defaultValue',
      title: '默认选中的条目',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'size',
      title: '选择框大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'large' },
        ],
      },
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
    },
    {
      name: 'treeDataSimpleMode',
      title: '简单格式的数据源',
      setter: 'expressionSetter',
    },
    {
      name: 'multiple',
      title: '支持多选',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'bordered',
      title: '边框',
      setter: 'boolSetter',
    },
    {
      name: 'autoClearSearchValue',
      title: '自动清空搜索框',
      tip: '当多选模式下值被选择，自动清空搜索框',
      setter: 'boolSetter',
    },
    {
      name: 'dropdownClassName',
      title: '下拉菜单className属性',
      setter: 'textSetter',
      group: 'style',
    },
    {
      name: 'dropdownMatchSelectWidth',
      title: '下拉菜单和选择器同宽',
      setter: 'textSetter',
      group: 'style',
    },
    {
      name: 'dropdownRender',
      title: '自定义下拉框内容',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'dropdownStyle',
      title: '下拉菜单的样式',
      setter: 'expressionSetter',
      group: 'style',
      setterProps: {
        expressionType: 'cssObject'
      },
    },
    {
      name: 'filterTreeNode',
      title: '筛选',
      // TODO 多类型
      setter: 'jsonSetter',
    },
    {
      name: 'getPopupContainer',
      title: '菜单渲染父节点',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'labelInValue',
      title: '包装label包装',
      setter: 'boolSetter',
    },
    {
      name: 'listHeight',
      title: '弹窗滚动高度',
      setter: 'numberSetter',
      group: 'style',
    },
    {
      name: 'loadData',
      title: '异步加载数据',
      setter: 'expressionSetter',
    },
    {
      name: 'maxTagCount',
      title: 'Tag数量限制',
      setter: 'numberSetter',
    },
    {
      name: 'maxTagPlaceholder',
      title: 'tag隐藏默认文本',
      setter: 'textSetter',
    },
    {
      name: 'searchValue',
      title: '搜索框的值',
      setter: 'textSetter',
    },
    {
      name: 'showArrow',
      title: '显示后缀图标',
      setter: 'boolSetter',
    },
    {
      name: 'showCheckedStrategy',
      title: '选中项回填的方式',
      setter: 'expressionSetter',
    },
    {
      name: 'showSearch',
      title: '可搜索',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'suffixIcon',
      title: '选择框后缀图标',
      setter: 'iconSetter',
    },
    {
      name: 'switcherIcon',
      title: '展开/折叠图标',
      setter: 'iconSetter',
    },
    {
      name: 'tagRender',
      title: 'tag渲染',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'treeCheckable',
      title: '显示Checkbox',
      setter: 'boolSetter',
    },
    {
      name: 'treeCheckStrictly',
      title: '节点选择完全受控',
      setter: 'boolSetter',
    },
    {
      name: 'treeDefaultExpandAll',
      title: '默认展开所有树节点',
      setter: 'boolSetter',
    },
    {
      name: 'treeDefaultExpandedKeys',
      title: '默认展开的树节点',
      setter: 'jsonSetter',
    },
    {
      name: 'treeExpandedKeys',
      title: '设置展开的树节点',
      setter: 'jsonSetter',
    },
    {
      name: 'treeIcon',
      title: '是否展示前缀图标',
      setter: 'boolSetter',
    },
    {
      name: 'treeLine',
      title: '展示线条样式',
      setter: 'boolSetter',
    },
    {
      name: 'treeNodeFilterProp',
      title: '输入项过滤',
      setter: 'textSetter',
    },
    {
      name: 'treeNodeLabelProp',
      title: '作为显示的prop设置',
      setter: 'textSetter',
    },
    {
      name: 'virtual',
      title: '关闭虚拟滚动',
      group: 'advanced',
      setter: 'boolSetter',
    },
    {
      name: 'onDropdownVisibleChange',
      title: '展开下拉菜单的回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onSearch',
      title: '文本框值变化时回调',
      tip: '仅在可搜索项为 true  时生效',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onSelect',
      title: '被选中时调用',
      tip: '格式：(value, node, extra) => {}',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onTreeExpand',
      title: '展示节点时调用',
      tip: '格式：(expandedKeys) => {}',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

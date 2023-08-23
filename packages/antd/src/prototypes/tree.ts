import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Tree: ComponentPrototypeType = {
  name: 'Tree',
  title: '树形控件',
  package: '@music163/antd',
  icon: 'icon-shuxingjiegou',
  help: '多层次的结构列表，如需要展示文件夹、组织架构、生物分类、国家地区数据等等',
  type: 'element',
  props: [
    ...StylePrototypes,
    {
      name: 'dataSource',
      title: '数据源',
      tip: '支持异步数据载入',
      setter: 'expressionSetter',
      initValue: [
        {
          title: 'parent 1',
          key: '0-0',
          children: [
            {
              title: 'parent 1-0',
              key: '0-0-0',
              children: [
                {
                  title: 'aaa',
                  key: '0-0-0-0',
                },
                {
                  title: 'bbb',
                  key: '0-0-0-1',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'fieldNames',
      title: '数据源的字段映射',
      tip: '当您传入的数据源的字段不是组件期望的字段时，可以使用该属性进行自定义映射',
      props: [
        {
          name: 'title',
          title: '标签',
          setter: 'textSetter',
        },
        {
          name: 'key',
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
      name: 'showSearch',
      title: '显示搜索框',
      setter: 'boolSetter',
    },
    {
      name: 'defaultExpandAll',
      title: '默认展开所有树节点',
      setter: 'boolSetter',
      initValue: true,
    },
    {
      name: 'checkable',
      title: '节点为复选框',
      setter: 'boolSetter',
    },
    {
      name: 'selectable',
      title: '节点可选中',
      setter: 'boolSetter',
    },
    {
      name: 'multiple',
      title: '支持点选多个节点',
      tip: '支持支持 ctrl(Windows) / command(Mac) 复选',
      setter: 'boolSetter',
    },
    {
      name: 'showLine',
      title: '展示连接线',
      setter: 'boolSetter',
    },
    {
      name: 'draggable',
      title: '节点可拖拽',
      setter: 'boolSetter',
    },
    {
      name: 'allowDrop',
      title: '是否允许拖拽时放置在该节点，格式：({ dropNode, dropPosition }) => boolean',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'checkedKeys',
      title: '当前选中的复选框树节点',
      setter: 'expressionSetter',
    },
    {
      name: 'expandedKeys',
      title: '展开指定的树节点',
      setter: 'expressionSetter',
    },
    {
      name: 'autoExpandParent',
      title: '自动展开父节点',
      setter: 'boolSetter',
    },
    { name: 'loadData', title: '异步加载数据', setter: 'expressionSetter' },
    {
      name: 'loadedKeys',
      title: '已经加载的节点',
      tip: '需要配合 loadData 使用',
      setter: 'expressionSetter',
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
    },
    {
      name: 'selectedKeys',
      title: '设置选中的树节点',
      setter: 'expressionSetter',
    },
    {
      name: 'treeLoadedKeys',
      title: '已经加载的节点',
      tip: '需要配合 loadData 使用',
      setter: 'expressionSetter',
    },
    {
      name: 'defaultCheckedKeys',
      title: '默认选中复选框的树节点',
      setter: 'expressionSetter',
    },
    {
      name: 'defaultExpandedKeys',
      title: '默认展开指定的树节点',
      setter: 'expressionSetter',
    },
    {
      name: 'defaultExpandParent',
      title: '默认展开父节点',
      setter: 'boolSetter',
    },
    {
      name: 'defaultSelectedKeys',
      title: '默认选中的树节点',
      setter: 'expressionSetter',
    },
    {
      name: 'showIcon',
      title: '展示节点title图标',
      tip: '没有默认样式，如设置为 true，需要自行定义图标相关样式',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'icon',
      title: '自定义树节点图标',
      setter: 'iconSetter',
      group: 'advanced',
    },
    {
      name: 'switcherIcon',
      title: '自定义展开/折叠图标',
      setter: 'iconSetter',
      group: 'advanced',
    },
    {
      name: 'titleRender',
      title: '自定义渲染节点',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'filterTreeNode',
      title: '按需筛选树节点',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'checkStrictly',
      title: '父子节点选中状态不再关联',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'blockNode',
      title: '节点占据一行',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'virtual',
      title: '虚拟滚动',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'height',
      title: '设置虚拟滚动容器高度',
      tip: '设置后内部节点不再支持横向滚动',
      setter: 'numberSetter',
      group: 'advanced',
    },
    { name: 'onSelect', title: '点击树节点触发', setter: 'actionSetter', group: 'event' },
    { name: 'onRightClick', title: '响应右键点击', setter: 'actionSetter', group: 'event' },
    { name: 'onCheck', title: '点击复选框触发', setter: 'actionSetter', group: 'event' },
    {
      name: 'onExpand',
      title: '展开/收起节点时触发',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onLoad',
      title: '节点加载完毕时触发',
      setter: 'actionSetter',
      group: 'event',
    },
    { name: 'onDrop', title: 'drop 触发时调用', setter: 'actionSetter', group: 'event' },
    { name: 'onDragStart', title: '开始拖拽时调用', setter: 'actionSetter', group: 'event' },
    {
      name: 'onDragEnd',
      title: 'dragend 触发时调用',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onDragLeave',
      title: 'dragleave 触发时调用',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onDragEnter',
      title: 'dragenter 触发时调用',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onDragOver',
      title: 'dragover 触发时调用',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

export const TreeNode: ComponentPrototypeType = {
  name: 'TreeNode',
  title: '树形控件节点',
  package: '@music163/antd',
  icon: 'icon-shuxingjiegou',
  type: 'element',
  props: [
    {
      name: 'checkable',
      title: '可选',
      setter: 'boolSetter',
    },
    {
      name: 'disableCheckbox',
      title: '禁掉 checkbox',
      setter: 'boolSetter',
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
    },
    {
      name: 'icon',
      title: '自定义图标',
      setter: 'iconSetter',
    },
    {
      name: 'isLeaf',
      title: '叶子结点',
      setter: 'boolSetter',
    },
    {
      name: 'key',
      title: '节点key',
      setter: 'textSetter',
    },
    {
      name: 'selectable',
      title: '设置节点是否可被选中',
      setter: 'boolSetter',
    },
    { name: 'title', title: '标题', setter: 'expressionSetter' },
  ],
};

export const DirectoryTree: ComponentPrototypeType = {
  name: 'DirectoryTree',
  title: '树形控件',
  package: '@music163/antd',
  icon: '',
  type: 'element',
  props: [
    {
      name: 'expandAction',
      title: '目录展开逻辑',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'false', value: 'false' },
          { label: 'click', value: 'click' },
          { label: 'doubleClick', value: 'doubleClick' },
        ],
      },
    },
  ],
};

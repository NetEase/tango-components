import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';
import { Pagination } from './pagination';

const renderChildrenOptions = [
  { label: '取消自定义', value: '' },
  {
    label: '自定义区域',
    value: 'Box',
    render: '{(record, index, indent, expanded) => <Box></Box>}',
    relatedImports: ['Box'],
  },
];

export const Table: ComponentPrototypeType = {
  title: '简单表格',
  name: 'Table',
  exportType: 'namedExport',
  icon: 'icon-biaoge',
  type: 'element',
  package: '@music163/antd',
  help: '最基本的表格组件，没有过多复杂的功能。',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    {
      name: 'columns',
      title: '表格列',
      setter: 'columnSetter',
      initValue: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ],
    },
    {
      name: 'rowKey',
      title: '数据主键',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'dataSource',
      title: '数据源',
      tip: '支持异步数据载入',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'rowSelection',
      title: '是否开启多选',
      defaultValue: false,
      props: [
        {
          name: 'type',
          title: '多选/单选',
          setter: 'choiceSetter',
          options: [
            { label: '多选', value: 'checkbox' },
            { label: '单选', value: 'radio' },
          ],
        },
        {
          name: 'fixed',
          title: '把选择框列固定在左边',
          setter: 'boolSetter',
        },
        {
          name: 'checkStrictly',
          title: 'checkable 状态下节点选择完全受控',
          setter: 'boolSetter',
        },
        {
          name: 'columnTitle',
          title: '自定义列表选择框标题',
          setter: 'textSetter',
        },
        {
          name: 'columnWidth',
          title: '自定义列表选择框宽度',
          setter: 'numberSetter',
        },
        {
          name: 'getCheckboxProps',
          title: '选择框的默认属性配置',
          setter: 'expressionSetter',
          tip: '(record) => {}',
        },
        {
          name: 'hideSelectAll',
          title: '隐藏全选勾选框与自定义选择项',
          setter: 'boolSetter',
        },
        {
          name: 'preserveSelectedRowKeys',
          title: '当数据被删除时仍然保留选项的 key',
          setter: 'boolSetter',
        },
        {
          name: 'renderCell',
          title: '自定义渲染勾选框',
          setter: 'expressionSetter',
          tip: '(checked, record, index, originNode) => {}',
        },
        {
          name: 'selectedRowKeys',
          title: '选中的项目',
          setter: 'expressionSetter',
          placeholder: '{[]}',
        },
        {
          name: 'defaultSelectedRowKeys',
          title: '默认选中项的 key 数组',
          setter: 'expressionSetter',
          placeholder: '{[]}',
        },
        {
          name: 'onChange',
          title: '选中项变化时',
          setter: 'actionSetter',
          autoCompleteOptions: ['(selectedRowKeys, selectedRows) => {}'],
        },
        {
          name: 'onSelect',
          title: '选择时',
          setter: 'actionSetter',
          tip: '(record, selected, selectedRows, nativeEvent) => {}',
        },
        {
          name: 'onSelectAll',
          title: '全选时',
          setter: 'actionSetter',
          tip: '(selected, selectedRows, changeRows) => {}',
        },
        {
          name: 'onSelectInvert',
          title: '用户手动选择反选时',
          setter: 'actionSetter',
          tip: '(selectedRowKeys) => {}',
        },
        {
          name: 'onSelectNone',
          title: '用户清空选择时',
          setter: 'expressionSetter',
        },
      ],
    },
    {
      name: 'pagination',
      title: '分页设置',
      props: Pagination.props,
    },
    {
      name: 'expandable',
      title: '配置展开属性',
      // tip: '{expandedRowRender:function(record, index, indent, expanded): ReactNode,其它配置项}，详细见：',
      // setter: 'tableExpandableSetter',
      props: [
        {
          name: 'expandedRowRender',
          title: '自定义渲染展开区域',
          setter: 'renderPropsSetter',
          options: renderChildrenOptions,
        },
        {
          name: 'rowExpandable',
          title: '设置是否允许行展开',
          tip: '(record) => boolean',
          setter: 'expressionSetter',
        },
        {
          name: 'expandRowByClick',
          title: '点击行时可展开',
          setter: 'boolSetter',
        },
        {
          name: 'onExpand',
          title: '点击展开图标事件',
          setter: 'eventSetter',
          tip: '(expanded, record) => {}',
        },
        {
          name: 'columnTitle',
          title: '自定义展开列表头',
          setter: 'textSetter',
        },
        {
          name: 'columnWidth',
          title: '展开列宽度',
          setter: 'numberSetter',
        },
        {
          name: 'defaultExpandAllRows',
          title: '默认是否展开所有行',
          setter: 'boolSetter',
        },
        {
          name: 'defaultExpandedRowKeys',
          title: '默认展开的行',
          setter: 'expressionSetter',
        },
        {
          name: 'expandedRowKeys',
          title: '展开的行（受控）',
          setter: 'expressionSetter',
        },
        {
          name: 'expandIcon',
          title: '自定义展开图标',
          setter: 'iconSetter',
        },

        {
          name: 'fixed',
          title: '控制展开图标是否固定',
          tip: 'true | "left" | "right"',
          setter: 'expressionSetter',
        },
        {
          name: 'childrenColumnName',
          title: '树形结构的列名',
          setter: 'textSetter',
        },
        {
          name: 'indentSize',
          title: '展示树形数据时，每层缩进的宽度',
          tip: '以 px 为单位',
          setter: 'numberSetter',
        },
        {
          name: 'showExpandColumn',
          title: '设置是否展示行展开列',
          setter: 'boolSetter',
        },
        {
          name: 'onExpandedRowsChange',
          title: '展开的行变化时',
          setter: 'eventSetter',
          tip: '(expandedRows) => {}',
        },
      ],
    },
    {
      name: 'scroll',
      title: '表格滚动设置',
      tip: '可以指定滚动区域的宽、高，格式：{{x:宽,y:高,scrollToFirstRowOnChange:boolean}}，详细参见：',
      props: [
        {
          name: 'scrollToFirstRowOnChange',
          title: '当分页、排序、筛选变化后是否滚动到表格顶部',
          setter: 'boolSetter',
        },
        {
          name: 'x',
          title: '横向滚动',
          tip: "也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 'max-content'",
          setter: 'expressionSetter',
        },
        {
          name: 'y',
          title: '纵向滚动',
          tip: '也可用于指定滚动区域的高，可以设置为像素值',
          setter: 'expressionSetter',
        },
      ],
    },
    {
      name: 'title',
      title: '表格标题',
      tip: '格式: (currentPageData) => {}，currentPageData为当前表格数据',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'summary',
      title: '总结栏',
      tip: '格式：(currentData) => ReactNode',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'footer',
      title: '表格尾部',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'size',
      title: '表格大小',
      setter: 'choiceSetter',
      options: [
        { label: '默认', value: 'default' },
        { label: '中等', value: 'middle' },
        { label: '小', value: 'small' },
      ],
      group: 'basic',
    },
    {
      name: 'bordered',
      title: '显示边框',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'showHeader',
      title: '显示表头',
      setter: 'boolSetter',
      defaultValue: true,
      group: 'basic',
    },
    {
      name: 'loading',
      title: '表格加载中',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'sticky',
      title: '粘性头部和滚动条',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'onChange',
      title: '分页、排序、筛选变化',
      autoCompleteOptions: ['(pagination, filters, sorter, extra) => {}'],
      setter: 'expressionSetter',
      group: 'event',
    },
    {
      name: 'onHeaderRow',
      title: '设置头部行属性',
      autoCompleteOptions: ['(columns, index) => {}'],
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'onRow',
      title: '设置行属性',
      autoCompleteOptions: ['(record, index) => {}'],
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'locale',
      title: '默认文案设置',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'rowClassName',
      title: '表格行的类名',
      setter: 'textSetter',
      group: 'style',
    },
  ],
};

export const TableColumn: ComponentPrototypeType = {
  title: '表格列',
  name: 'TableColumn',
  exportType: 'namedExport',
  icon: 'icon-biaoge',
  type: 'element',
  package: '@music163/antd',
  hasChildren: false,
  props: [
    {
      name: 'title',
      title: '列标题',
      setter: 'textSetter',
      initValue: '列标题',
      group: 'basic',
    },
    {
      name: 'dataIndex',
      title: '数据索引',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'tooltip',
      title: '列名提示',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'width',
      title: '列宽度',
      setter: 'numberSetter',
      group: 'basic',
    },
    {
      name: 'type',
      title: '列渲染类型',
      group: 'basic',
      setterProps: {
        options: [
          { label: '图片', value: 'image' },
          { label: '链接', value: 'link' },
          { label: '行动组', value: 'actionList' },
          { label: '标签', value: 'tag' },
          { label: '状态灯', value: 'badge' },
          { label: '数字', value: 'number' },
          { label: '日期', value: 'date' },
          { label: '多行名称内容', value: 'label' },
        ],
      },
      setter: 'pickerSetter',
    },
    {
      name: 'actions',
      title: '行动组数据设置',
      tip: '仅当列渲染类型为行动组时生效',
      setter: 'actionListSetter',
      group: 'basic',
      getVisible: (form) => form.getValue('type') === 'actionList',
    },
    {
      name: 'onAction',
      title: '行动组按钮点击',
      tip: '仅当列渲染类型为行动组时生效',
      setter: 'actionSetter',
      group: 'event',
      getVisible: (form) => form.getValue('type') === 'actionList',
    },
    {
      name: 'tagIcon',
      title: '渲染为 Tag 时内部 Icon',
      tip: '仅当列渲染类型为标签时生效',
      setter: 'jsxSetter',
      group: 'basic',
      getVisible: (form) => form.getValue('type') === 'tag',
    },
    {
      name: 'color',
      title: '颜色设置',
      tip: '仅当列渲染类型为标签或者状态灯时生效',
      setter: 'expressionSetter',
      group: 'basic',
      getVisible: (form) => {
        const value = form.getValue('type');

        return ['tag', 'badge'].includes(value);
      },
    },
    {
      name: 'options',
      title: '多行名称内容数据源',
      tip: '仅当列渲染类型为多行名称内容类型时生效',
      setter: 'expressionSetter',
      group: 'basic',
      getVisible: (form) => form.getValue('type') === 'label',
    },
    {
      name: 'format',
      title: '文本内容格式化',
      tip: '仅当列渲染类型为数字或者日期类型时生效',
      setter: 'expressionSetter',
      group: 'basic',
      getVisible: (form) => {
        const value = form.getValue('type');

        return ['date', 'number'].includes(value);
      },
    },
    {
      name: 'render',
      title: '自定义渲染',
      tip: '生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引',
      autoCompleteOptions: ['(value, record, index) => { return null; }'],
      setter: 'tableCellSetter',
    },
    {
      name: 'fixed',
      title: '固定列',
      setter: 'choiceSetter',
      options: [
        { label: '不锁', value: undefined },
        { label: '左侧', value: 'left' },
        { label: '右侧', value: 'right' },
      ],
    },
    {
      name: 'align',
      title: '列对其方式',
      setter: 'choiceSetter',
      options: [
        { label: '左对齐', value: 'left' },
        { label: '右对齐', value: 'right' },
        { label: '居中对齐', value: 'center' },
      ],
    },
    {
      name: 'ellipsis',
      title: '超过宽度自动省略',
      setter: 'boolSetter',
    },
    {
      name: 'colSpan',
      title: '表头列合并',
      tip: '设置为 0 时，不渲染',
      setter: 'numberSetter',
    },
    {
      name: 'sorter',
      title: '列排序',
      setter: 'expressionSetter',
      group: 'advanced',
      autoCompleteOptions: [
        `(record1,record2) => {
        //示例：按照id降序排列
        //return record1.id-record2.id
      }`,
      ],
    },
    {
      name: 'filters',
      title: '表头的筛选菜单项',
      tip: '格式：[{ text: "option1", value: "option1" }]',
      setter: 'optionSetter',
      disableVariableSetter: true,
      group: 'advanced',
      setterProps: {
        getKey: (item: any) => item.value,
        renderItem: (item: any) => item.text,
        listItemFormFields: [
          { label: '标签', name: 'text', required: true },
          { label: '选项值', name: 'value', required: true },
        ],
        newItemDefaultValues: {
          text: '选项',
          value: 'option',
        },
      },
    },
    {
      name: 'filterIcon',
      title: '自定义 filter 图标',
      setter: 'jsxSetter',
      group: 'advanced',
    },
    {
      name: 'filteredValue',
      title: '筛选的受控属性',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'filterMode',
      title: '指定筛选菜单的用户界面',
      setter: 'choiceSetter',
      defaultValue: 'menu',
      options: [
        { label: '菜单', value: 'menu' },
        { label: '树状', value: 'tree' },
      ],
      group: 'advanced',
    },
    {
      name: 'onCell',
      title: '动态设置单元格属性',
      setter: 'expressionSetter',
      autoCompleteOptions: ['(record, rowIndex) => {}'],
      group: 'advanced',
    },
    {
      name: 'onHeaderCell',
      title: '动态设置头部单元格属性',
      setter: 'expressionSetter',
      autoCompleteOptions: ['(column) => {}'],
      group: 'advanced',
    },
  ],
};

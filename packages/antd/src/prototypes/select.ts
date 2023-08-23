import { ComponentPrototypeType } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from './common';

export const CommonPrototypes: any = [
  ...StylePrototypes,
  {
    name: 'placeholder',
    title: '输入提示',
    setter: 'textSetter',
    group: 'basic',
  },
  {
    name: 'mode',
    title: '模式',
    options: [
      { label: '默认', value: undefined },
      { label: '多选', value: 'multiple' },
      { label: '标签', value: 'tags' },
    ],
    setter: 'choiceSetter',
  },
  {
    name: 'maxTagCount',
    title: '展示的Tag数量限制',
    setter: 'numberSetter',
  },
  {
    name: 'defaultValue',
    title: '默认选中项',
    setter: 'expressionSetter',
    tip: '可通过model变量设置初始值',
    group: 'basic',
  },
  {
    name: 'width',
    title: '组件宽度设置',
    setter: 'textSetter',
  },
  {
    name: 'allowClear',
    title: '支持清除',
    setter: 'boolSetter',
  },
  {
    name: 'disabled',
    title: '禁用',
    setter: 'boolSetter',
    group: 'basic',
  },
  {
    name: 'labelInValue',
    title: 'label包装',
    tip: '是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式',
    setter: 'boolSetter',
  },
];

export const ActionPrototypes = [
  {
    name: 'onChange',
    title: '下拉框值变化的回调',
    tip: '参数(value,option)',
    setter: 'actionSetter',
    group: 'event',
    autoCompleteOptions: ['(value, option)=>{}'],
  },
  {
    name: 'onSelect',
    title: '选项被选中的回调',
    tip: '参数：(selecteedValue, selecteedOption)',
    setter: 'actionSetter',
    group: 'event',
  },
];

export const Select: ComponentPrototypeType = {
  name: 'Select',
  title: '下拉选择',
  icon: 'icon-xuanzeqi',
  type: 'element',
  package: '@music163/antd',
  help: '下拉选择器，弹出一个下拉菜单给用户选择操作',
  hasChildren: true,
  props: [
    ...InstancePrototypes,
    {
      name: 'options',
      title: '数据源',
      tip: '支持异步数据载入',
      setter: 'optionSetter',
      initValue: [
        {
          label: '选项1',
          value: '选项1',
        },
        {
          label: '选项2',
          value: '选项2',
        },
        {
          label: '选项3',
          value: '选项3',
        },
      ],
      group: 'basic',
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
          name: 'options',
          title: '子结点',
          setter: 'textSetter',
        },
      ],
    },
    {
      name: 'showSearch',
      title: '支持搜索',
      setter: 'boolSetter',
    },
    {
      name: 'searchDebounceWait',
      title: '搜索时的防抖时间 (ms)',
      setter: 'numberSetter',
      getVisible: (form) => form.getValue('showSearch'),
    },
    ...CommonPrototypes,
    {
      name: 'filterOption',
      title: '筛选',
      tip: '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false',
      setter: 'expressionSetter',
    },
    {
      name: 'size',
      title: '选择框大小',
      setter: 'choiceSetter',
      defaultValue: 'middle',
      options: [
        { label: '小', value: 'small' },
        { label: '中', value: 'middle' },
        { label: '大', value: 'large' },
      ],
    },
    {
      name: 'loading',
      title: '加载中状态',
      setter: 'boolSetter',
    },
    {
      name: 'bordered',
      title: '边框',
      setter: 'boolSetter',
    },

    // advance
    {
      name: 'suffixIcon',
      title: '后缀图标',
      setter: 'iconSetter',
      group: 'advanced',
    },
    {
      name: 'removeIcon',
      title: '清除图标',
      setter: 'iconSetter',
      group: 'advanced',
    },
    {
      name: 'showArrow',
      title: '显示下拉小箭头',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'defaultOpen',
      title: '默认展开下拉菜单',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'autoFocus',
      title: '默认获取焦点',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'autoClearSearchValue',
      title: '选中后清空搜索框',
      tip: '只在 mode 为 multiple 或 tags 时有效',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'defaultActiveFirstOption',
      title: '高亮第一个选项',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'notFoundContent',
      title: '自定义空内容',
      tip: '当下拉列表为空时显示的内容',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'listHeight',
      title: '弹窗滚动高度',
      setter: 'numberSetter',
      group: 'advanced',
    },
    {
      name: 'dropdownRender',
      title: '自定义下拉框内容',
      tip: '对下拉菜单进行自由扩展,参数为当前下拉框节点',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'filterSort',
      title: '排序',
      tip: '搜索时对筛选结果项的排序函数, 类似Array.sort里的 compareFunction',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'maxTagPlaceholder',
      title: '隐藏tag时显示的内容',
      setter: 'textSetter',
      group: 'advanced',
    },
    {
      name: 'maxTagTextLength',
      title: 'tag 文本长度限制',
      setter: 'numberSetter',
      group: 'advanced',
    },
    {
      name: 'tagRender',
      title: 'tags/multiple内容渲染',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'tokenSeparators',
      title: 'tags/multiple分隔符',
      tip: '分隔符',
      setter: 'expressionSetter', // string[]
      group: 'advanced',
    },
    {
      name: 'optionFilterProp',
      title: '所有过滤option属性',
      tip: "搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索。若通过 options 属性配置选项内容，建议设置 optionFilterProp='label' 来对内容进行搜索。",
      setter: 'textSetter',
      group: 'advanced',
    },
    {
      name: 'optionLabelProp',
      title: '回填属性值',
      tip: '回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。示例',
      setter: 'textSetter',
      group: 'advanced',
    },
    {
      name: 'searchValue',
      title: '控制搜索文本',
      setter: 'textSetter',
      group: 'advanced',
    },
    {
      name: 'menuItemSelectedIcon',
      title: '选中的条目图标',
      tip: '自定义多选时当前选中的条目图标',
      setter: 'iconSetter',
      group: 'advanced',
    },
    {
      name: 'virtual',
      title: '虚拟滚动',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'getPopupContainer',
      title: '菜单渲染父节点',
      tip: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。示例',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    // 事件
    ...ActionPrototypes,
    {
      name: 'onSearch',
      title: '文本框值变化回调',
      tip: '参数: (文本框值)',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onInputKeyDown',
      title: '按键按下回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onFocus',
      title: '获得焦点回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onBlur',
      title: '失去焦点回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onClear',
      title: '清除内容回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onDeselect',
      title: '取消选中调用',
      tip: '取消选中时调用，参数: (被选中项的value|key) 仅在 multiple 或 tags 模式下生效',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onDropdownVisibleChange',
      title: '下拉菜单展开回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onMouseEnter',
      title: '鼠标移入回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onMouseLeave',
      title: '鼠标移出回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onPopupScroll',
      title: '下拉列表滚动回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'dropdownClassName',
      title: '下拉菜单className',
      setter: 'textSetter',
      group: 'style',
    },
    {
      name: 'dropdownStyle',
      title: '下拉菜单style属性',
      setter: 'expressionSetter',
      group: 'style',
    },
    {
      name: 'dropdownMatchSelectWidth',
      title: '下拉菜单和选择器同宽',
      tip: '下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动',
      group: 'style',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '默认最小宽度', value: 'min-width' },
          { label: '关闭', value: false },
        ],
      },
    },
  ],
};

import { IComponentPrototype } from '@music163/tango-helpers';

export const Table: IComponentPrototype = {
  name: 'Table',
  title: '表格',
  package: '@music163/tango-mail',
  icon: 'icon-biaoge',
  type: 'element',
  props: [
    {
      name: 'caption',
      title: '标题',
      setter: 'textSetter',
    },
    {
      name: 'columns',
      title: '表格列',
      setter: 'codeSetter',
      initValue: [
        { dataIndex: 'name', title: 'Name' },
        { dataIndex: 'color', title: 'Color' },
        { dataIndex: 'category', title: 'Category' },
        { dataIndex: 'price', title: 'Price' },
      ],
    },
    {
      name: 'dataSource',
      title: '数据源',
      setter: 'codeSetter',
      initValue: [
        { id: '1', name: 'Apple', color: 'Red', category: 'Fruit', price: '$1.00' },
        { id: '2', name: 'Banana', color: 'Yellow', category: 'Fruit', price: '$0.50' },
        { id: '3', name: 'Carrot', color: 'Orange', category: 'Vegetable', price: '$0.25' },
        { id: '4', name: 'Daikon', color: 'White', category: 'Vegetable', price: '$0.75' },
      ],
    },
    {
      name: 'primaryKey',
      title: '数据源的主键',
      setter: 'textSetter',
      initValue: 'id',
    },
    {
      name: 'getRowProps',
      title: '设置行属性',
      setter: 'codeSetter',
      tip: '设置行属性，设置格式为 (rowData: any, rowIndex: number) => React.HTMLAttributes<HTMLTableRowElement>',
    },
    {
      name: 'className',
      title: '自定义表格类',
      setter: 'textSetter',
    },
    {
      name: 'headClassName',
      title: '自定义表格头类',
      setter: 'textSetter',
    },
  ],
};

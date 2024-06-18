import { Email, Table, Container, Box } from '@music163/tango-mail';

export default {
  title: 'email/Table',
  parameters: {
    layout: 'fullscreen',
  },
};

const columns = [
  { dataIndex: 'name', title: 'Name' },
  { dataIndex: 'color', title: 'Color' },
  { dataIndex: 'category', title: 'Category' },
  { dataIndex: 'price', title: 'Price' },
];

const dataSource = [
  { id: '1', name: 'Apple', color: 'Red', category: 'Fruit', price: '$1.00' },
  { id: '2', name: 'Banana', color: 'Yellow', category: 'Fruit', price: '$0.50' },
  { id: '3', name: 'Carrot', color: 'Orange', category: 'Vegetable', price: '$0.25' },
  { id: '4', name: 'Daikon', color: 'White', category: 'Vegetable', price: '$0.75' },
];

export function Basic() {
  return (
    <Email bg="#333">
      <Container
        style={{
          width: 800,
        }}
      >
        <Table
          caption="表格的基本用法"
          columns={columns}
          dataSource={dataSource}
          getRowProps={(data, index) => {
            if (index === 1) {
              return {
                className: 'bg-red-500 text-white',
              };
            }
          }}
        />

        <Table
          caption="自定义表头样式"
          columns={columns}
          dataSource={dataSource}
          headClassName="bg-gray-900 text-white"
        />
      </Container>
    </Email>
  );
}

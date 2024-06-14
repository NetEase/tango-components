import { defineComponent } from '@music163/tango-boot';
import React from 'react';

interface TableColumnData {
  key: string;
  title: string;
  dataIndex: string;
}

export interface TableProps extends React.ComponentPropsWithoutRef<'table'> {
  /**
   * 标题
   */
  caption?: string;
  /**
   * 表格列
   */
  columns?: TableColumnData[];
  /**
   * 数据源
   */
  dataSource?: object[];
  /**
   * 数据源的主键
   */
  primaryKey?: string;
}

// TODO: table cell colors
function TableView({ caption, columns, dataSource, primaryKey = 'id', ...props }: TableProps) {
  return (
    <table className="w-full text-sm text-left text-gray-500" {...props}>
      {caption ? (
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          {caption}
        </caption>
      ) : null}
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          {columns?.map((column) => (
            <th key={column.key || column.dataIndex} scope="col" className="px-6 py-3">
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource?.map((data) => {
          const key = data[primaryKey];
          return (
            <tr key={key} className="bg-white border-b">
              {columns?.map((column) => (
                <td key={column.key || column.dataIndex} className="px-6 py-4">
                  {data[column.dataIndex]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export const Table = defineComponent(TableView, {
  name: 'Table',
});

import { defineComponent } from '@music163/tango-boot';
import React from 'react';
import cx from 'classnames';

interface TableColumnData {
  /**
   * 唯一标识符，如果没有提供该属性，则使用 `dataIndex` 作为唯一标识符
   */
  key?: string;
  /**
   * 列标题
   */
  title: string;
  /**
   * 单元格的数据源字段
   */
  dataIndex: string;
  /**
   * 自定义渲染单元格
   * @param cellData
   * @param rowData
   * @param rowIndex
   * @returns
   */
  render?: (cellData: React.ReactNode, rowData: any, rowIndex: number) => React.ReactNode;
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
  /**
   * 设置行属性
   * @param rowData
   * @param rowIndex
   * @returns
   */
  getRowProps?: (rowData: any, rowIndex: number) => React.HTMLAttributes<HTMLTableRowElement>;
}

function TableView({ caption, columns, dataSource, primaryKey = 'id', ...props }: TableProps) {
  return (
    <table className="w-full text-sm text-left text-gray-500" {...props}>
      {caption ? (
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          {caption}
        </caption>
      ) : null}
      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
          {columns?.map((column) => (
            <th key={column.key || column.dataIndex} scope="col" className="px-6 py-3">
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource?.map((data, rowIndex) => {
          const key = data[primaryKey];
          const { className: rowClassName, ...rowProps } =
            props.getRowProps?.(data, rowIndex) || {};
          return (
            <tr {...rowProps} key={key} className={cx('bg-white', 'border-b', rowClassName)}>
              {columns?.map(({ key, dataIndex, render = renderCell }) => (
                <td key={key || dataIndex} className="px-6 py-4">
                  {render(data[dataIndex], data, rowIndex)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function renderCell(cellData: React.ReactNode, rowData: any, rowIndex: number) {
  return cellData;
}

export const Table = defineComponent(TableView, {
  name: 'Table',
});

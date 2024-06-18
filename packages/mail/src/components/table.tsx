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
  /**
   * 表格布局算法
   */
  tableLayout?: 'auto' | 'fixed';
  /**
   * 自定义表格类
   */
  className?: string;
  /**
   * 自定义表格头类
   */
  headClassName?: string;
}

function TableView({
  caption,
  columns,
  dataSource,
  primaryKey = 'id',
  tableLayout,
  style,
  className,
  headClassName,
  ...props
}: TableProps) {
  return (
    <table
      className={cx('w-full text-sm text-left text-gray-500', className)}
      style={{
        tableLayout,
        ...style,
      }}
      {...props}
    >
      {caption ? (
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
          {caption}
        </caption>
      ) : null}
      <thead className={cx('text-xs text-gray-700 uppercase bg-gray-100', headClassName)}>
        <tr>
          {columns?.map((column) => (
            <th key={column.key || column.dataIndex} scope="col" className="px-4 py-2">
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource?.map((data, rowIndex) => {
          const key = data[primaryKey];
          const {
            className: rowClassName,
            style: rowStyle,
            ...rowProps
          } = props.getRowProps?.(data, rowIndex) || {};
          return (
            <tr
              {...rowProps}
              key={key}
              style={{ borderBottomStyle: 'solid', ...rowStyle }}
              className={cx('bg-white border-b border-gray-200', rowClassName)}
            >
              {columns?.map(({ key, dataIndex, render = renderCell }) => (
                <td key={key || dataIndex} className="px-4 py-3">
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

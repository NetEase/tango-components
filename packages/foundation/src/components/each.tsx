import React from 'react';

export interface EachProps<T = any> {
  /**
   * 数据源
   */
  dataSource?: T[];
  /**
   * 自定义渲染器
   */
  render?: (item: T, index: number) => React.ReactNode;
}

const defaultRender = (): React.ReactNode => null;

export function Each({ dataSource = [], render = defaultRender }: EachProps) {
  const items = Array.isArray(dataSource) ? dataSource : [];

  return <>{items.map((item, index) => render(item, index))}</>;
}

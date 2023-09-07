import { IComponentMapper, connect } from '@formily/react';

export const componentMap = new Map();

export function register<T extends React.ComponentType>(
  name: string,
  target: T,
  ...args: Array<IComponentMapper<T>>
) {
  const Comp = connect(target, ...args);
  if (name) {
    componentMap.set(name, Comp);
  }
  return Comp;
}

export function getComponent(name: string | React.ComponentType<any>) {
  if (typeof name === 'string') {
    return componentMap.get(name);
  }
  return name;
}

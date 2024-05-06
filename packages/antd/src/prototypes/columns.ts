import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Columns: ComponentPrototypeType = {
  name: 'Columns',
  type: 'container',
  icon: 'icon-column-4',
  package: '@music163/antd',
  hasChildren: true,
  childrenName: ['Column'],
  props: [...StylePrototypes],
};

export const Column: ComponentPrototypeType = {
  name: 'Column',
  type: 'container',
  icon: 'icon-column-4',
  package: '@music163/antd',
  hasChildren: true,
  props: [...StylePrototypes],
};

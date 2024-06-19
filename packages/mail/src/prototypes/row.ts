import { ComponentPrototypeType } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../helpers';

export const Row: ComponentPrototypeType = {
  name: 'Row',
  title: '行',
  package: '@music163/tango-mail',
  icon: 'icon-row',
  type: 'container',
  hasChildren: true,
  childrenName: ['Column'],
  initChildren: '<Column><Section></Section></Column><Column><Section></Section></Column>',
  relatedImports: ['Column', 'Section'],
  props: [...STYLE_PROPS],
};

export const Columns2: ComponentPrototypeType = {
  name: 'Columns2',
  title: '两列布局',
  package: '@music163/tango-mail',
  icon: 'icon-column-2',
  type: 'snippet',
  relatedImports: ['Row', 'Column', 'Section'],
  initChildren:
    '<Row><Column><Section></Section></Column><Column><Section></Section></Column></Row>',
};

export const Columns3: ComponentPrototypeType = {
  name: 'Columns3',
  title: '三列布局',
  package: '@music163/tango-mail',
  icon: 'icon-column-3',
  type: 'snippet',
  relatedImports: ['Row', 'Column', 'Section'],
  initChildren:
    '<Row><Column><Section></Section></Column><Column><Section></Section></Column><Column><Section></Section></Column></Row>',
};

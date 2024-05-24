import { ComponentPrototypeType } from '@music163/tango-helpers';

export const Row: ComponentPrototypeType = {
  name: 'Row',
  title: '代码块',
  package: '@music163/tango-mail',
  icon: 'icon-anniu',
  type: 'container',
  hasChildren: true,
  childrenName: ['Column'],
  initChildren: '<Column></Column><Column></Column>',
  relatedImports: ['Column'],
  props: [
    {
      name: 'style',
      title: '样式',
      setter: 'codeSetter',
    },
  ],
};

export const Columns2: ComponentPrototypeType = {
  name: 'Columns2',
  title: '两列布局',
  package: '@music163/tango-mail',
  icon: 'icon-column-2',
  type: 'snippet',
  relatedImports: ['Row', 'Column'],
  initChildren: '<Row><Column></Column><Column></Column></Row>',
};

export const Columns3: ComponentPrototypeType = {
  name: 'Columns3',
  title: '三列布局',
  package: '@music163/tango-mail',
  icon: 'icon-column-3',
  type: 'snippet',
  relatedImports: ['Row', 'Column'],
  initChildren: '<Row><Column></Column><Column></Column><Column></Column></Row>',
};

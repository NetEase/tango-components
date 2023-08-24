// import React, { createElement } from 'react';
import { withDnd } from '@music163/tango-helpers';
import { Input as BaseInput, TextArea as BaseTextArea } from '../components';

export const Input = withDnd({
  name: 'Input',
  overrideProps: { autoFocus: false },
})(BaseInput);

export const TextArea = withDnd({
  name: 'TextArea',
  overrideProps: { autoFocus: false },
})(BaseTextArea);

// export const Search = withDnd({ name: 'Search' })(OneSearch);

// export const InputGroup = withDnd({ name: 'InputGroup' })(
//   ({ children = <EmptyPlaceholder />, ...reset }: any) =>
//     createElement(OneInputGroup, { ...reset }, children),
// );

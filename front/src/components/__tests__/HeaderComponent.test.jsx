import React from 'react';
import { render, cleanup } from '@testing-library/react';

import UsersList from '../UsersList';

afterEach(cleanup);

const products = [
  {
    'email': 'hermanmu@gmail.com',
    'id': 1,
    'username': 'michael'
  },
  {
    'email': 'michael@mherman.org',
    'id': 2,
    'username': 'michaelherman'
  }
];

it('renders a username', () => {
  const { getByText } = render(<ProductList prodicts={products}/>);
  expect(getByText('michael')).toHaveClass('username');
  expect(getByText('michaelherman')).toHaveClass('username');
});
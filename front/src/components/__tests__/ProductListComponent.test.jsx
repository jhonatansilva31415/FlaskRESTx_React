import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ProductList from '../ProductListComponent';

afterEach(cleanup);

const products = [
  {
    'url': 'hermanmu@gmail.com',
    'img_url': 1,
    '': 'michael'
  },
  {
    'email': 'michael@mherman.org',
    'id': 2,
    'username': 'michaelherman'
  }
];

it('renders a username', () => {
  const { getByText } = render(<ProductList products={products}/>);
  expect(getByText('michael')).toHaveClass('username');
  expect(getByText('michaelherman')).toHaveClass('username');
});
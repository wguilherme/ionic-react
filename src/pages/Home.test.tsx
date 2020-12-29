import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('página precisa ter o título Home', async () => {
  const { findByText } = render(<Home />);
  await findByText('Home');
});
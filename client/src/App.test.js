import React from 'react';
import  { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />)
});

test('displays the title', () => {
  const { getByText } = render(<App />);
  getByText(/women soccer world cup/i)
});

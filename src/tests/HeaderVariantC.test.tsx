// Test: HeaderVariantC renders
import React from 'react';
import { render } from '@testing-library/react';
import HeaderVariantC from '../components/HeaderVariantC';

test('HeaderVariantC renders placeholder text', () => {
  const { getByText } = render(<HeaderVariantC />);
  expect(getByText(/HeaderVariantC/i)).toBeTruthy();
});

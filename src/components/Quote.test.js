import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Quote from './Quote';

describe('Quote component', () => {
  it('should render loading while fetching data', () => {
    render(<Quote />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});

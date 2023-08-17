import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Home from './Home';

describe('Home component', () => {
  it('should render the title correctly', () => {
    const { getByText } = render(<Home />);
    const titleElement = getByText('Welcome to our page!');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the paragraphs correctly', () => {
    const { getByText } = render(<Home />);
    const paragraphElement1 = getByText(/Lorem ipsum/);
    const paragraphElement2 = getByText(/Debitis, cumque nobis/);
    expect(paragraphElement1).toBeInTheDocument();
    expect(paragraphElement2).toBeInTheDocument();
  });
});

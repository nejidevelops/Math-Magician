import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/jest-globals';
import NavBar from './NavBar';

test('renders the navbar with correct label', () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );

  const labelElement = screen.getByText('Math Magicians');
  expect(labelElement).toBeInTheDocument();
});

test('renders the navbar with correct links', () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );

  const homeLink = screen.getByRole('link', { name: 'Home' });
  const calculatorLink = screen.getByRole('link', { name: 'Calculator' });
  const quoteLink = screen.getByRole('link', { name: 'Quote' });

  expect(homeLink).toHaveAttribute('href', '/');
  expect(calculatorLink).toHaveAttribute('href', '/calculator');
  expect(quoteLink).toHaveAttribute('href', '/quote');
});

test('matches snapshot', () => {
  const { container } = render(
    <Router>
      <NavBar />
    </Router>,
  );
  expect(container).toMatchSnapshot();
});

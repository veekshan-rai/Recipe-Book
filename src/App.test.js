import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Food Cuisines navbar or home elements', () => {
  render(<App />);
  const headings = screen.getAllByText(/Food Cuisines/i);
  expect(headings.length).toBeGreaterThan(0);
});


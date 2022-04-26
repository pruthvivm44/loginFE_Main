import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

test('checking text in Home component', () => {
  render(<Home />);
  const linkElement = screen.getByText('Next.js!');
  expect(linkElement).toBeInTheDocument();
});

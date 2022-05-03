import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../pages/index';
import store from '../src/store';
test('checking text in Home component', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const linkElement = screen.getByText('Next.js!');
  expect(linkElement).toBeInTheDocument();
});

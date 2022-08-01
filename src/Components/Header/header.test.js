import { render } from '@testing-library/react';
import Header from './index';

test('Header Renders without Error', () => {
  const { queryByTestId } = render(<Header />);
  const component = queryByTestId('header');
  expect(component).toBeTruthy();
});

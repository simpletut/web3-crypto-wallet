import { render } from '@testing-library/react';
import Grid from './index';

test('Grid Renders without Error', () => {
  const { queryByTestId } = render(<Grid />);
  const component = queryByTestId('grid');
  expect(component).toBeTruthy();
});

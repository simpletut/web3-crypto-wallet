import { render } from '@testing-library/react';
import Column from './index';

test('Column Renders without Error', () => {
  const { queryByTestId } = render(<Column />);
  const component = queryByTestId('column');
  expect(component).toBeTruthy();
});

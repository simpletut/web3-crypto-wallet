import { render } from '@testing-library/react';
import DefaultTemplate from './index';

test('DefaultTemplate Renders without Error', () => {
  const { queryByTestId } = render(<DefaultTemplate />);
  const component = queryByTestId('defaultTemplate');
  expect(component).toBeTruthy();
});

import { render } from '@testing-library/react';
import ClearFix from './index';

test('ClearFix Renders without Error', () => {
  const { queryByTestId } = render(<ClearFix />);
  const component = queryByTestId('clearfix');
  expect(component).toBeTruthy();
});

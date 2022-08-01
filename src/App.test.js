import { render } from '@testing-library/react';
import App from './App';

test('App Renders without Error', () => {
  const { queryByTestId } = render(<App />);
  const component = queryByTestId('defaultTemplate');
  expect(component).toBeTruthy();
});

import { render } from '@testing-library/react';
import SubmitBtn from './index';

test('SubmitBtn Renders without Error', () => {
  const { queryByTestId } = render(<SubmitBtn />);
  const component = queryByTestId('btn');
  expect(component).toBeTruthy();
});

import { render } from '@testing-library/react';
import TransactionForm from './index';

test('TransactionForm Renders without Error', () => {
  const { queryByTestId } = render(<TransactionForm />);
  const component = queryByTestId('transactionForm');
  expect(component).toBeTruthy();
});

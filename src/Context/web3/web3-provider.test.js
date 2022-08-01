import { render } from '@testing-library/react';
import Web3Provider from './provider';

test('Web3Provider Renders children', () => {
  const { queryByTestId } = render(
    <Web3Provider>
      <div data-testid="children" />
    </Web3Provider>
  );
  const component = queryByTestId('children');
  expect(component).toBeTruthy();
});

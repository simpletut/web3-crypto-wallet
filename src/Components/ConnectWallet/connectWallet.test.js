import { render } from '@testing-library/react';
import ConnectWallet from './index';
import { Web3Context } from './../../Context/web3/provider';

test('ConnectWallet Renders without Error', () => {
  const { queryByTestId } = render(
    <Web3Context.Provider value={{
      isLoadingWeb3: false,
      validChain: true
    }}>
      <ConnectWallet />
    </Web3Context.Provider>
  );
  const component = queryByTestId('connectWallet');
  expect(component).toBeTruthy();
});

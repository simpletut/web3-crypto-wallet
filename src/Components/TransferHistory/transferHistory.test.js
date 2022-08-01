import { render } from '@testing-library/react';
import TransferHistory from './index';
import { Web3Context } from './../../Context/web3/provider';

test('TransferHistory Renders without Error', () => {
  const { queryByTestId } = render(
    <Web3Context.Provider value={{
      isLoadingWeb3: false,
      validChain: true,
      isFetching: false,
      transfers: [{
        amount: {_hex: "0x53444835ec580000", _isBigNumber: true},
        timestamp: {_hex: "0x62e6a4bc", _isBigNumber: true}
      }],
    }}>
      <TransferHistory />
    </Web3Context.Provider>
  );
  const component = queryByTestId('transferHistory');
  expect(component).toBeTruthy();
});

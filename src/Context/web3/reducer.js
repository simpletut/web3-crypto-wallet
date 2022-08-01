import types from './types';
import { getContracts, getWeb3, setChain } from './utils';

export const INITIAL_STATE = {
  ethereum: null,
  provider: null,
  chainId: null,
  validChain: null,
  signer: null,
  contracts: {},
  balance: null,
  account: '',
  isLoadingWeb3: true,
  transfers: [],
  isFetching: true
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.GET_WEB3:
      return {
        ...state,
        ...getWeb3()
      }
    case types.GET_CONTRACTS:
      return {
        ...state,
        contracts: getContracts(action.payload)
      }
    case types.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case types.SET_ACCOUNT:
      return {
        ...state,
        account: action.payload
      }
    case types.SET_TRANSFERS:
      return {
        ...state,
        transfers: action.payload,
        isFetching: false
      }
    case types.SET_BALANCE:
      return {
        ...state,
        balance: action.payload
      }
    case types.SET_CHAIN_ID:
      return {
        ...state,
        ...setChain(action.payload),
      }
    default:
      return state;
  }
};

export default reducer;
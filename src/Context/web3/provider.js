import React, { createContext, useReducer, useEffect } from 'react';
import reducer, { INITIAL_STATE } from './reducer';
import types from './types';
import { ethers } from 'ethers';

export const Web3Context = createContext({
  ...INITIAL_STATE
});

const Web3Provider = props => {
  const [store, dispatch] = useReducer(reducer, INITIAL_STATE);
  const {
    ethereum,
    provider,
    chainId,
    validChain,
    signer,
    contracts,
    account,
    balance,
    isLoadingWeb3,
    transfers,
    isFetching
  } = store;

  const initWeb3 = () => {
    dispatch({
      type: types.GET_WEB3,
    });
  };

  const initContracts = signer => {
    dispatch({
      type: types.GET_CONTRACTS,
      payload: signer
    });
  };

  const setAccount = async accounts => {
    if (Array.isArray(accounts) && accounts.length > 0) {
      const _account = accounts[0];

      dispatch({
        type: types.SET_ACCOUNT,
        payload: _account
      });
    }
  }

  const connectToWallet = async () => {
    try {
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts);

    } catch (err) {
      console.log(err);
    }
  };

  const disconnectWallet = () => {
    window && window.location.reload();
  };

  const setIsFetching = isFetching => {
    dispatch({
      type: types.SET_IS_FETCHING,
      payload: isFetching
    });
  };

  const getAllTransfers = async () => {
    try {
      const _transfers = await contracts.walletContract.getTransfers();
      dispatch({
        type: types.SET_TRANSFERS,
        payload: _transfers
      });

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    initWeb3();

  }, []);

  useEffect(() => {
    const getChainId = async () => {
      const { chainId } = await provider.getNetwork();

      dispatch({
        type: types.SET_CHAIN_ID,
        payload: chainId
      });
    };

    if (provider) getChainId();

  }, [provider]);

  useEffect(() => {
    if (signer) initContracts(signer);
  }, [signer]);

  useEffect(() => {
    provider && provider.provider.on('accountsChanged', accounts => setAccount(accounts));
    provider && provider.provider.on('chainChanged', () => window && window.location.reload());
    provider && provider.provider.on('disconnect', () => window && window.location.reload());

  }, [provider])

  useEffect(() => {
    const getBalance = async _account => {
      const balance = await provider.getBalance(_account);
      const _balance = ethers.utils.formatEther(balance);

      dispatch({
        type: types.SET_BALANCE,
        payload: _balance
      });
    };

    if (account) getBalance(account);
  }, [account, provider]);

  return (
    <Web3Context.Provider value={{
      ethereum,
      provider,
      chainId,
      validChain,
      signer,
      contracts,
      account,
      balance,
      isLoadingWeb3,
      transfers,
      isFetching,
      connectToWallet,
      disconnectWallet,
      getAllTransfers,
      setIsFetching,
    }}>
      {props.children}
    </Web3Context.Provider>
  )
}

export default Web3Provider;

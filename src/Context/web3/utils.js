import { ethers } from "ethers";
import { walletContractAddress, walletContractABI } from '../../ContractUtils/WalletContract'

export const ganacheChainId = 1337;
export const goerliChainId = 5;
export const ethMainnetChainId = 1;

export const getWeb3 = () => {
  let ethereum,
    provider,
    signer;

  try {
    ethereum = window && window.ethereum;
    if (ethereum) {
      provider = new ethers.providers.Web3Provider(ethereum);
      signer = provider.getSigner();
    }

  } catch (err) {
    console.log(err);
  }

  return {
    ethereum,
    provider,
    signer,
    isLoadingWeb3: false,
    isFetching: ethereum ? true : false
  };
};

const createContracts = signer => {
  if (!signer) return {};
  const walletContract = new ethers.Contract(walletContractAddress, walletContractABI, signer);

  return {
    walletContract
  };
};

export const getContracts = signer => {
  let contracts = {};

  try {
    if (signer) {
      contracts = createContracts(signer);
    }

  } catch (err) {
    console.log(err);
  }

  return contracts;
};

export const setChain = chainId => {
  const validChain = process.env.NODE_ENV === 'development' ? (chainId === goerliChainId) : (chainId === ethMainnetChainId);

  return {
    validChain,
    chainId,
    isFetching: validChain ? true : false
  };
};

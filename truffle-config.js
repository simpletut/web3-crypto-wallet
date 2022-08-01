const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  contracts_build_directory: "./compiledContracts",
  test_directory: './contractTests',
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(
          '<<--Private Key/s-->>',
          '<<--RPC URL-->>'
        )
      },
      network_id: '5',
      gas: 4465030,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.11",
    }
  },
};

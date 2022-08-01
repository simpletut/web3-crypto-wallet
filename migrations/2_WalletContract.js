const WalletContract = artifacts.require('WalletContract');

module.exports = function(deployer) {
  deployer.deploy(WalletContract);
};

const WalletContract = artifacts.require("WalletContract");

contract("WalletContract", (accounts) => {

  it("Should Create New Transfers", async () => {
    const WalletContractInstance = await WalletContract.deployed();

    // Setup 2 accounts.
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    // Make transaction from first account to second.
    const amount = 1;
    const msg = 'Test transfer'
    await WalletContractInstance.createTransfer(accountTwo, amount, msg, { from: accountOne });

    // Get All Transfers
    const transfers = await WalletContractInstance.getTransfers.call();

    // Check New Transfer
    assert.equal(
      transfers[0].fromAddress,
      accountOne,
      "fromAddress Saved Correctly"
    );

    assert.equal(
      transfers[0].toAddress,
      accountTwo,
      "toAddress Saved Correctly"
    );

    assert.equal(
      transfers[0].amount,
      amount,
      "amount Saved Correctly"
    );

    assert.equal(
      transfers[0].message,
      msg,
      "message Saved Correctly"
    );
  });
});
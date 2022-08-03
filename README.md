
# Ethereum Blockchain Web3 Dapp - Crypto Wallet/Transfers

**Live demo:** https://crypto-wallet.simpletut.com

This is an example of a Web3 Decentralized Application written with Ethereum and Solidity Smart Contracts.

![Crypto Wallet](https://user-images.githubusercontent.com/20645523/182588429-d25c2a71-6c09-4f42-a811-318abbe4c44a.png)

This is an example of a Web3 Decentralized Application written with Ethereum and Solidity Smart Contracts.

**Features:**

 - Detects/Prompts user to Install MetaMask if not already installed
 - Detects/Prompts user if they are connected or switch to an incorrect chain
 - Connect MataMask Wallet
 - Display user Address
 - Display user Balance
 - Detect when users switch accounts/address in MetaMask Wallet
 - Transfer Ethereum to another address
 - Saves transfers to storage in Smart Contract
 - Query Smart Contract to fetch transfer history and renders them within the UI

**Tech Stack**

 - React (Hooks)
 - Ethers (Web3)
 - Formik
 - SCSS
 - Solidity 
 - Truffle
 - Alchemy
 - React Testing Library

**Please note:** I have deployed my Smart Contract to the Goerli Testnet for demo/test purposes .

**Setup the App:**

Firstly you will need to clone this repository locally and install its dependencies.

1. Clone this repository `git clone ...`

2. Install dependencies `npm i`

**Truffle**

We are going to be using Truffle to compile and migrate/deploy our Smart Contract.

You will need to install Truffle before we proceed:

`npm install truffle -g`

https://trufflesuite.com/truffle

**MetaMask**

You will need to install the MetaMask Chrome Extension and setup/restore your wallet.

https://metamask.io/

**Network**

Please ensure you switch to the Goerli Test Network

![enter image description here](https://user-images.githubusercontent.com/20645523/182619105-cf843ce8-60f1-48a7-a8f3-b56eae042c89.png)

**Alchemy**

We will deploy our smart contract to Ethereum's Goerli Testnet using Alchemy, a platform used to manage blockchain apps.

Please create/signin to your Alchemy Account and Create a New App. 

https://www.alchemy.com

![enter image description here](https://user-images.githubusercontent.com/20645523/182615961-3323ee93-2999-4bb3-938a-c06299cc688f.png)

Please ensure that you select the Ethereum Chain and Goerli Network (Testnet)  

Once you have created your App, you will need to get your RPC url, we will use this to deploy our Smart Contract.

![enter image description here](https://user-images.githubusercontent.com/20645523/182616992-5b310ec5-a472-4b0a-974c-cce889c5d50a.png)

Select "View Key" & Copy your "HTTPS" url.

**Test Eth**

In order to deploy our smart contract we will need some Test Eth.

Visit the Goerli Faucet and request some Test Eth to your Goerli Network Address 

Visit: https://goerlifaucet.com 

**Please note:** You will need to login to your Alchemy Account to withdraw from the faucet

**Configure Truffle**

Let's configure Truffle to deploy our Smart Contract.

Open: `truffle-config.js` and update the `goerli` provider. 

Update `'<<--Private Key/s-->>'` with the Private Key from the Address we sent the Test Eth.

**How to get my Private Key**

**Please note:** DO NOT share your Private Key/s with anyone. DO NOT push this code to GitHub with your Private Key/s.

This should only be inserted into this file locally to be used when deploying our Smart Contract. The Private Key will be used to give permission for the Network to take the Gas Fees associated with deploying the Smart Contract, from the Address Associated with this Private Key.

Within MetaMask, Click the 3 dots and Select "Account Details"

![enter image description here](https://user-images.githubusercontent.com/20645523/182622249-4741cddf-3a39-423e-9b95-01e453e3e777.png)

Click "Export Private Key"

![enter image description here](https://user-images.githubusercontent.com/20645523/182622433-a00a36b8-edc2-4c93-80b3-299dfaeaee2b.png)

Update `'<<--RPC URL-->>'` with the "HTTPS" url we copied earlier from Alchemy.

**Deploy our Contract**

From your Terminal run the following command: 

`truffle migrate --network goerli`

**Deployed Address**

Once Truffle has deployed our Smart Contract, please scan the output within your Terminal and copy the Address of your deployed Smart Contract.

**Connecting to our Smart Contract**

We need to configure our React Application to connect to our Smart Contract.

Open `/src/ContractUtils/WalletContract/index.js`

Update `walletContractAddress` with the Address of the Deployed Smart Contract

Update `walletContractABI` with the ABI of your compiled Smart Contract.

**How to get my ABI**

After Truffle has compiled your Smart Contract, you will be able to find 

`compiledContracts/WalletContract.json`

Find the Array stored in the `abi` key.

Run the application locally:

`npm start`

**Run Truffle Tests (Test Smart Contract):**

`truffle test`

**Run React Unit Tests**

`npm test`

**Run Production Build**

`npm run build`

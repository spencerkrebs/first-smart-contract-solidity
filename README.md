<h1 align='center'>Udemy: Ethereum & Solidity - First Smart Contract</h1>

****

## 🌎 Overview
This application uses the ganache test network to deploy a smart contract. Mocha was used to access different aspects of the smart contract. Web3 was used to obtain a list of our accounts, and the smart contract was deployed. The HDWalletProvider was used to generate the public key, private key, and address of our account. The provider connected to an infura node using rinkeby.infura.io. 

## 👍 How To Run
The app can be run locally for testing and further development.
```bash
# clone the repo and cd into the inbox directory
# install dependencies
npm i

# To deploy, you must have a 12-word mnemonic phrase and an infura address, and these are passed in to the HDWalletProvider
node deploy.js

# Tests
npm run test

```
## 📦 Tech Stack 
* Solidity
* Mocha
* Ganache - (hosts a local test network) 

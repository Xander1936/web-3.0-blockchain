// hardhat-waffle is a plugin to build smart contracts tests

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: '',
      accounts: [''],
    },
  },
};




require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOOGLE_WEB3_API_KEY = process.env.GOOGLE_WEB3_API_KEY;

module.exports = {
  solidity: "0.8.0", // Specify your Solidity version
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${GOOGLE_WEB3_API_KEY}`, // Replace with Alchemy or Infura URL if needed
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 11155111, // Sepolia Chain ID
    }
  }
};
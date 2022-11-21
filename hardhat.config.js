require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // mumbai: {
    //   url: `https://polygon-mumbai.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d`,
    //   accounts: [ process.env.REACT_APP_PRIVATE_KEY ]
    // },
    // matic: {
    //   url: "https://polygon-mainnet.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d",
    //   accounts: [ process.env.REACT_APP_PRIVATE_KEY ]
    // },
    goerli: {
      url: process.env.REACT_APP_ALCHEMY_API_URL,
      accounts: "2cd7ab8e0d3629345282d82355ea70dba0cbe373e14f896b63e470339db839b6"
    },
    // VMO: {
    //   url: `http://10.1.4.148:8545`,
    //   accounts: "2cd7ab8e0d3629345282d82355ea70dba0cbe373e14f896b63e470339db839b6"
    // },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
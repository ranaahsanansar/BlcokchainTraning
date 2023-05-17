
const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");

const privateKey1 = "d936a5aaceab6287f4dd8c4a645df34fa71dacf6756691fc4e7ad100a96a6dca";

task("accounts" , "Print Accounts" , async (taskArg , hre ) => {
  const accounts =  await hre.ethers.getSigners();
  console.log(accounts)
  for (const account of accounts){
    const address = await account.address;
    
    console.log("Address: " + address);
  }
})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/g5_IZehi2__Fi9Jj5Pgs53cy_Shg9umf",
      accounts: [privateKey1],
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
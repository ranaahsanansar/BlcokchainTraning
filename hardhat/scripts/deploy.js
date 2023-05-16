// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const Lock = await hre.ethers.getContractFactory("MyToken");
  // const lock = await Lock.deploy("0x006D625740bcE48FCa4cd637A8360411BbA29465" , "0xf6F304847c55f0EcC3c55640FBcDe615b08fE30e" , 500);
  const UpgradeableContract = await hre.upgrades.deployProxy(Lock , [18] , {
    initializer: "initialize"
  });

  await UpgradeableContract.deployed();

  console.log(
    "Contract Address is : " + UpgradeableContract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 


// Non Upgradeable 

// MyToken = 0x006D625740bcE48FCa4cd637A8360411BbA29465
// Locking SmartContract = 0xaaA64f05a0bDaeB258a8D8C68B2686A4dB198361 

// Upgrdae Able 

// MyToken = 0x97F446700Aee47BB91846d27AD66b702f66a2Df2 ;




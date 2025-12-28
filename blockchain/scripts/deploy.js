const hre = require("hardhat");

async function main() {
  const Carbon = await hre.ethers.getContractFactory("CarbonCreditNFT");
  const contract = await Carbon.deploy();
  await contract.deployed();
  console.log("Deployed to:", contract.address);
}

main();

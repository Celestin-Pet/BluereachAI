const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CarbonCreditNFT", function () {
  let contract;
  let owner, user;

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();

    const Carbon = await ethers.getContractFactory("CarbonCreditNFT");
    contract = await Carbon.deploy();
    await contract.deployed();
  });

  it("Should mint a carbon NFT", async function () {
    await contract.mintCarbonNFT(user.address, 100, "ipfs://metadata.json");

    const ownerOfToken = await contract.ownerOf(0);
    expect(ownerOfToken).to.equal(user.address);
  });

  it("Should update carbon score", async function () {
    await contract.mintCarbonNFT(user.address, 80, "ipfs://metadata.json");
    await contract.updateCarbon(0, 120);

    const data = await contract.carbonData(0);
    expect(data.carbonScore).to.equal(120);
  });
});

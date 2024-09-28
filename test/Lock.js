const { expect } = require('chai');
const hre = require('hardhat');
const { time } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("Lock", function (){
  it("Should set the right unlock time", async function (){
    const lockedAmount = 1_000_000_000;
    const ONE_YEAR_IN_SECONDS = 365 * 24 * 60 * 60;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECONDS;

    const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
      value: lockedAmount,
    });

    expect(await lock.unlockTime()).to.equal(unlockTime);
});
});
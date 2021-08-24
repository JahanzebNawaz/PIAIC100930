require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });



const Private_key = "d81d3807d0c51974dba03b973cc35445a09a2b6bdad8b597fce6d250f9a417a0"
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks:{
    ropsten: {
      url: "https://ropsten.infura.io/v3/75e0ae58c9a74ad493befaa016dffd0c",
      accounts: [`0x${Private_key}`]
    }
  }
};
const HDWalletProvider = require('@truffle/hdwallet-provider');


// const mnemonic = "alone magnet similar twelve talk strike nothing dawn syrup ridge width train";

// e28c8e34024db32c0d45f7d492ed9aa865ed8ba92777a2bc37ebc21bab1605ad

require('dotenv').config()
const mnemonic = process.env.MNEMONIC


module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
  //  development: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  },
  //  test: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  }
      ropsten: {
        provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/12f06167d5c84cabb36f1b6d41257ecd"),
        network_id: 3,       // Ropsten's id
        gas: 5500000,        // Ropsten has a lower block limit than mainnet
        confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        timeoutBlocks: 2000,  // # of blocks before a deployment times out  (minimum/default: 50)
        skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
        from: "0xB5d464617851FAca62040aD818E455b3E6d7c8DA",
        gasPrice: 30000000000
      },

  },

// Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },


  //
  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows: 
  // $ truffle migrate --reset --compile-all
  //
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};

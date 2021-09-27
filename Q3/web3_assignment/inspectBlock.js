const Web3 = require('web3')


const rpcURL = "https://ropsten.infura.io/v3/75e0ae58c9a74ad493befaa016dffd0c"
const web3 = new Web3(rpcURL)


// get latest block number
web3.eth.getBlockNumber().then(console.log)

// // get latest block
web3.eth.getBlock('latest').then(console.log)


// get latest 10 blocks
web3.eth.getBlockNumber().then((latest) => {
  for (let i = 0; i < 10; i++) {
    web3.eth.getBlock(latest - i).then(console.log)
  }
})

// get transaction from specific block
const hash = '0x3f17ab86025df56e90ad2417b09e05e364672b7cb83046123ce5db82d3bbec47'
web3.eth.getTransactionFromBlock(hash, 2).then(console.log)


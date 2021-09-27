const Web3 = require('web3')
const rpcURL = "https://ropsten.infura.io/v3/75e0ae58c9a74ad493befaa016dffd0c"
const web3 = new Web3(rpcURL)
const account = "0xB5d464617851FAca62040aD818E455b3E6d7c8DA"


web3.eth.getBalance(account, (err, wei) => {
  balance = web3.utils.fromWei(wei, 'ether')
  console.log(balance)
})


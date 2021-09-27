var Tx = require('ethereumjs-tx')

const Web3 = require('web3')
const rpcURL = "https://ropsten.infura.io/v3/75e0ae58c9a74ad493befaa016dffd0c"
const web3 = new Web3(rpcURL)


// 0xB5d464617851FAca62040aD818E455b3E6d7c8DA
// 0x05E9686A40200415E62F69eBb7EBAD67901D634C

const account1 = '0xB5d464617851FAca62040aD818E455b3E6d7c8DA'  // 5 eth
const account2 = '0x05E9686A40200415E62F69eBb7EBAD67901D634C'  // 0.2


const pKey1 = process.env.PRIVATE_KEY_1
const pKey2 = process.env.PRIVATE_KEY_2

const privateKey1 = Buffer.from(pKey1, 'hex')
const privateKey2 = Buffer.from(pKey2, 'hex')


const getTransactionCountAsync = async () => {
    try {
        const txCount = await web3.eth.getTransactionCount(account1);
        const txObj = {
			nonce:    web3.utils.toHex(txCount),
			to:       account2,
			value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
			gasLimit: web3.utils.toHex(21000),
			gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
        }

        const tx = new Tx.Transaction(txObj, { chain: "ropsten", hardfork: "petersburg" });
        tx.sign(privateKey1);
        const serializedTx = tx.serialize();
        const raw = "0x" + serializedTx.toString('hex');
        const signedTransaction = await web3.eth.sendSignedTransaction(raw);
        console.log("signedTransaction", signedTransaction)
    }
    catch (error) {
        console.log("error", error)
    }
}


getTransactionCountAsync()
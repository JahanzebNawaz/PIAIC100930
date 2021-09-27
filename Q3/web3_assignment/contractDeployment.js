const Tx = require('ethereumjs-tx');
const Web3 = require("web3");

const rpcURL = "https://ropsten.infura.io/v3/75e0ae58c9a74ad493befaa016dffd0c"

const web3 = new Web3(rpcURL);

const account = "0xB5d464617851FAca62040aD818E455b3E6d7c8DA";
const pKey1 = process.env.PRIVATE_KEY_1
const privateKey = Buffer.from(pKey1, 'hex')


const byteCode = "608060405234801561001057600080fd5b5060eb8061001f6000396000f3fe608060405260043610601f5760003560e01c806312065fe0146057576020565b5b7f909c57d5c6ac08245cf2a6de3900e2b868513fa59099b92b27d8db823d92df9c5a604051604d91906092565b60405180910390a1005b348015606257600080fd5b506069607d565b604051607491906092565b60405180910390f35b600047905090565b608c8160ab565b82525050565b600060208201905060a560008301846085565b92915050565b600081905091905056fea2646970667358221220c8a650c9267ac8ee08ebec206af2f19af518a209e22dba157d4b653dd5f3455764736f6c63430008000033";

const byteCodeBuffer = Buffer.from(byteCode, "hex");


const contractDeployAsync = async () => {
    try {
        const txCount = await web3.eth.getTransactionCount(account);
        const txObj = {
            nonce: web3.utils.toHex(txCount),
            data: byteCodeBuffer,
            gasLimit: web3.utils.toHex(500000),
            gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei"))
        }
        const tx = new Tx.Transaction(txObj, { chain: "ropsten", hardfork: "petersburg" });
        tx.sign(privateKey);
        const serializedTx = tx.serialize();
        const raw = "0x" + serializedTx.toString('hex');
        const signedTransaction = await web3.eth.sendSignedTransaction(raw);
        console.log("signedTransaction", signedTransaction)
    }
    catch (error) {
        console.log("error", error)
    }
}

contractDeployAsync()

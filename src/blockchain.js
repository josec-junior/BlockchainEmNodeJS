import { getTimestamp } from "./utils.js"
import Block from "./block.js"

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()]
        this.pendingTransactions = []
    }

    getChain() {
        let string = ""
        for (let i = 0; i < (this.chain.length); i++) {
            const block = this.chain[i] 

            let transactions = ""
            if (Array.isArray(block.data)) {
                transactions = block.data.map(transaction => `Sender: ${transaction.sender} | Receiver: ${transaction.receiver} | Amount: ${transaction.amount}` ).join("\n")
            }

            string += `${block.index == 0? `Genesis Block`: `Block #${this.chain[i].index}`}
            Hash: ${block.hash}
            Previous Hash: ${block.previousHash}
            Transactions:\n${transactions}
            Timestamp: ${block.timestamp}\n`
        }
        return string
    }

    createGenesisBlock() {
        const timestamp = getTimestamp()
        const genesisBlock = new Block(0, timestamp, [], 0)
        genesisBlock.mineBlock()
        return genesisBlock
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }

    generateNextBlock() {
        const previousBlock = this.getLatestBlock()
        const nextIndex = previousBlock.index + 1
        const nextTimeStamp = getTimestamp()
        const nextData = this.pendingTransactions
        const nextBlock = new Block(nextIndex, nextTimeStamp, nextData, previousBlock.hash)
        this.pendingTransactions = []
        return nextBlock
    }

    addBlock(newBlock) {
        this.chain.push(newBlock)
    }

    isValidChain() {
        for (let i = 1; i < this.chain.length; i++) {
            let currentBlock = this.chain[i]
            let previousBlock = this.chain[i - 1]
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false
            }
            if (currentBlock.previousHash !== previousBlock.calculateHash()) {
                return false
            }
        }
        return true
    }

    addTransaction(transaction) {
        if (!transaction.isValidAddress(transaction.sender) || !transaction.isValidAddress(transaction.receiver)) {
            throw new Error("Endereço do Destinatário ou do Remetente inválido!")
        }
        this.pendingTransactions.push(transaction)
    }

    minePendingTransactions() {
        const newBlock = this.generateNextBlock()
        newBlock.mineBlock()
        this.addBlock(newBlock)
        this.pendingTransactions = []
    }

    getTransactionHistory(address) {
        let transactions = []
        for (let block of this.chain) {
            for (let transaction of block.data) {
                if (transaction.sender === address || transaction.receiver === address) {
                    transactions.push(transaction)
                }
            }
        }
        return transactions
    }
}

export default Blockchain
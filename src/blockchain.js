import { getTimeStamp } from "./utils.js"
import Block from "./block.js"

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }

    getChain() {
        let string = ""
        for (let i = 0; i < (this.chain.length); i++) {
            string += `${this.chain[i].index == 0? `Genesis Block`: `Block #${this.chain[i].index}`}
            Hash: ${this.chain[i].hash}
            Previous Hash: ${this.chain[i].previousHash}
            Data: ${this.chain[i].data}
            Timestamp: ${this.chain[i].timestamp}\n`
        }
        return string
    }

    createGenesisBlock() {
        const timestamp = getTimeStamp()
        return new Block(0, timestamp, "Genesis Block", 0)
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }

    generateNextBlock(blockData) {
        const previousBlock = this.getLatestBlock()
        const nextIndex = previousBlock.index + 1
        const nextTimeStamp = getTimeStamp()
        const nextBlock = new Block(nextIndex, nextTimeStamp, blockData, previousBlock.hash)
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
}

export default Blockchain
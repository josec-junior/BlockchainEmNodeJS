import crypto from "crypto"

class Block {
    constructor(index, timestamp, data, previousHash, difficulty = 4) {
        this.index = index,
        this.timestamp = timestamp,
        this.data = data,
        this.previousHash = previousHash,
        this.hash = this.calculateHash(),
        this.nonce = 0,
        this.difficulty = difficulty
    }

    calculateHash() {
        return crypto.createHash("sha256").update(this.index + this.previousHash + this.timestamp + this.data + this.nonce).digest("hex").toString()
    }

    mineBlock() {
        while (this.hash.substring(0, this.difficulty) !== "0".repeat(this.difficulty)) {
            this.nonce++
            this.hash = this.calculateHash()
        }
        console.log(`Bloco minerado: ${this.hash}`)
    }
}

export default Block
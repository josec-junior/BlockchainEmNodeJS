import crypto from "crypto"

class Block {
    constructor(index, timestamp, data, previousHash) {
        this.index = index,
        this.timestamp = timestamp,
        this.data = data,
        this.previousHash = previousHash,
        this.hash = this.calculateHash()
    }

    calculateHash() {
        return crypto.createHash("sha256").update(this.index + this.previousHash + this.timestamp + this.data).digest("hex").toString()
    }
}

export default Block
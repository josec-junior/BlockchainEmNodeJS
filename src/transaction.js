import { getTimestamp } from "./utils.js";

class Transaction {
    constructor(sender, receiver, amount) {
        this.sender = sender,
        this.receiver = receiver,
        this.amount = amount
        this.timestamp = getTimestamp()
    }

    isValidAddress(address) {
        const addressPatern = /^[a-zA-z]{2}[0-9a-fA-F]{8}$/
        return addressPatern.test(address)
    }
}

export default Transaction
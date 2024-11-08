import Blockchain from "./blockchain.js"
import Transaction from "./transaction.js"

const compassChain = new Blockchain()

// Função de mineração com prova de trabalho
const minePendingTransactions = (minerAddress) => {
    // Minere o bloco de transações pendentes
    compassChain.minePendingTransactions(minerAddress)
}

// Criando endereços
const wallet1 = "AB1C3D5E78"
const wallet2 = "CD9A7E54B2"

// Criando transações
const transaction1 = new Transaction(wallet1, wallet2, 100)
const transaction2 = new Transaction(wallet2, wallet1, 50)

// Adicionando transações
compassChain.addTransaction(transaction1)
compassChain.addTransaction(transaction2)

// Mineração das transações pendentes
minePendingTransactions(wallet1)

console.log(`${compassChain.getChain()}`)

// Teste 1: Verificando a validade da cadeia correta
console.log(`1º Teste - Esta Blockchain é válida? ${compassChain.isValidChain()}\n`)

// Teste 2: Validando os endereços
console.log(`2º Teste - Endereço ${wallet1} é válido? ${transaction1.isValidAddress(wallet1)}\n`)
console.log(`2º Teste - Endereço ${wallet2} é válido? ${transaction2.isValidAddress(wallet2)}\n`)

// Teste 3: Verificando o histórico de transações
console.log(`3º Teste - Histórico de transações do endereço ${wallet1}: ${JSON.stringify(compassChain.getTransactionHistory(wallet1), null, 2)}\n`)
console.log(`3º Teste - Histórico de transações do endereço ${wallet2}: ${JSON.stringify(compassChain.getTransactionHistory(wallet2), null, 2)}\n`)
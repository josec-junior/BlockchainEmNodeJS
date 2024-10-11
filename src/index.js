import Blockchain from "./blockchain.js"

const compassChain = new Blockchain()

const block1 = compassChain.generateNextBlock("Primeira transação realizada após o Bloco Gênesis")
compassChain.addBlock(block1)

const block2 = compassChain.generateNextBlock("Segunda transação realizada após o bloco gênesis")
compassChain.addBlock(block2)

console.log(`${compassChain.getChain()}\n`)

// Teste 1: Verificando a validade da cadeia correta
console.log(`1º Teste - Esta Blockchain é válida? ${compassChain.isValidChain()}\n`)

// Teste 2: Alterando os dados de um bloco
block1.data = "Dados alterados!"
console.log(`2º Teste - A Blockchain é válida após modificar os dados do bloco da primeira transação? ${compassChain.isValidChain()}\n`)

// Revertendo a alteração para continuar os testes
block1.data = "Primeira transação realizada após o Bloco Gênesis"
block1.hash = block1.calculateHash()

// Teste 3 - Alterando o hash de um bloco
block1.hash = "Hash diferenciado"
console.log(`3º Teste - A Blockchain é valída após modificar o hash do bloco da primeira transação? ${compassChain.isValidChain()}`)
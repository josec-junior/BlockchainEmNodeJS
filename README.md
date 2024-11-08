# 🔗 *Blockchain* em Node.js 🟢

Este projeto implementa um sistema de *Blockchain* simples em **Node.js**, utilizando a estrutura de dados **Lista Encadeada**, com um sistema simples de mineração e de *Proof of Work* e sem a presença de carteiras com o par de chaves pública e privada; trata-se da(o) 2º atividade/desafio individual proposto durante a trilha de aprendizado do Estágio em *AWS, Blockchain e Real Digital* da empresa **Compass UOL**.

## Pré-requisitos ℹ️
Antes de tudo, certifique-se de que você tenha instalado na sua máquina o Node.js (versão 10.0.0 ou superior), para garantir que o projeto funcione corretamente; o projeto não utiliza nenhuma biblioteca externa, apenas a biblioteca `crypto`, nativa do Node.js.
Você pode instalar o Node.js junto com o *Node Package Manager* (npm) pelo site oficial do Node. Segue o link abaixo:

[Node.js](https://nodejs.org/en/download/package-manager)

## Configuração Inicial ⚙️

Para poder utilizar a aplicação, clone o repositório remoto para a sua máquina local, através do comando:
`git clone https://github.com/josec-junior/BlockchainEmNodeJS.git`

Após clonar o repositório, abra-o em um terminal ou alguma IDE, como o *Visual Studio Code*.

## Executando a aplicação ▶️

O arquivo `package.json` já possui um script responsável por executar a aplicação, basta executar o comando: `npm start`.

Se tudo estiver configurado corretamente, será exibido no console algo como:

```plaintext
Bloco minerado: 0000fa31d9004918414770d002a2c724d76a29728bf473f3a75b0a608e97283a
Bloco minerado: 000011cba8fe7e2a7d2b73e863f94311900877f69503986b16a324017ae1f434
Genesis Block
            Hash: 0000fa31d9004918414770d002a2c724d76a29728bf473f3a75b0a608e97283a
            Previous Hash: 0
            Transactions:

            Timestamp: Fri Nov 08 2024 - 11:09:43 GMT-0300 (Horário Padrão de Brasília)
Block #1
            Hash: 000011cba8fe7e2a7d2b73e863f94311900877f69503986b16a324017ae1f434
            Previous Hash: 0000fa31d9004918414770d002a2c724d76a29728bf473f3a75b0a608e97283a
            Transactions:
Sender: AB1C3D5E78 | Receiver: CD9A7E54B2 | Amount: 100
Sender: CD9A7E54B2 | Receiver: AB1C3D5E78 | Amount: 50
            Timestamp: Fri Nov 08 2024 - 11:09:43 GMT-0300 (Horário Padrão de Brasília)

1º Teste - Esta Blockchain é válida? true

2º Teste - Endereço AB1C3D5E78 é válido? true

2º Teste - Endereço CD9A7E54B2 é válido? true

3º Teste - Histórico de transações do endereço AB1C3D5E78: [
  {
    "sender": "AB1C3D5E78",
    "receiver": "CD9A7E54B2",
    "amount": 100,
    "timestamp": "Fri Nov 08 2024 - 11:09:43 GMT-0300 (Horário Padrão de Brasília)"
  },
  {
    "sender": "CD9A7E54B2",
    "receiver": "AB1C3D5E78",
    "amount": 50,
    "timestamp": "Fri Nov 08 2024 - 11:09:43 GMT-0300 (Horário Padrão de Brasília)"
  }
]

3º Teste - Histórico de transações do endereço CD9A7E54B2: [
  {
    "sender": "AB1C3D5E78",
    "receiver": "CD9A7E54B2",
    "amount": 100,
    "timestamp": "Fri Nov 08 2024 - 11:09:43 GMT-0300 (Horário Padrão de Brasília)"
  },
  {
    "sender": "CD9A7E54B2",
    "receiver": "AB1C3D5E78",
    "amount": 50,
    "timestamp": "Fri Nov 08 2024 - 11:09:43 GMT-0300 (Horário Padrão de Brasília)"
  }
]
```

**Obs**: São gerados *hashes* diferentes a cada execução, com base nos dados e no *hash* do bloco, assim como o *hash* do bloco anterior e a data e hora que o bloco foi criado (*timestamp*).

Caso você utilize o *Visual Studio Code* e tenha a extensão `Node.js Exec`, também pode executar a aplicação abrindo o arquivo `index.js` e apertando a tecla **F8**.

## Funcionalidades 🛠️

Essa aplicação conta com as seguintes funcionalidades:
- Criação da cadeia de blocos;
- Gerar um novo bloco e adicioná-lo a cadeia;
- Calculo de *Hash* para cada bloco da cadeia;
- Visualizar toda a cadeia de blocos;
- Acessar o último bloco da cadeia;
- Validação da cadeia;
- Criação de transações simples entre dois endereços;
- Validação de endereços, obedecendo ao critério 2 letras e 8 caracteres hexadecimais;
- Mineração de blocos;
- Visualizar o histórico de transações de um determinado endereço.

## Considerações Finais 🔮

Como mencionado no início deste `README`, este projeto simula um sistema de *Blockchain* simples, com um sistema simples de transações, mineração e *Proof of Work*, além disso, não há a presença de carteira com par de chaves pública e privada e os dados são **mockados**, sinta-se a vontade para implementar melhorias no código, como a adição de carteiras com um par de chaves pública e privada e uma entrada de dados dinâmica.

<!-- Imagens centralizadas utilizando HTML -->
<p align = "center">
    <img src = "https://github.com/user-attachments/assets/50d96dcf-a9d0-42cf-8c28-585896b8c7fc" alt = "Logo Compass UOL" width = "100">
</p>
<p align = "center">
    <img src = "https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&" alt = "License">
</p>
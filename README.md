# 🔗 *Blockchain* em Node.js 🟢

Este projeto implementa um sistema de *Blockchain* simples em **Node.js**, utilizando a estrutura de dados **Lista Encadeada**, sem a presença do *nonce* nos blocos da cadeia e sem o sistema de mineração e de *Proof of Work*; trata-se da(o) 1º atividade/desafio individual proposto durante a trilha de aprendizado do Estágio em *AWS, Blockchain e Real Digital* da empresa **Compass UOL**.

## Pré-requisitos ℹ️
Antes de tudo, certifique-se de que você tenha instalado na sua máquina o Node.js (versão 10.0.0 ou superior), para garantir que o projeto funcione corretamente; o projeto não utiliza nenhuma biblioteca externa, apenas a biblioteca `crypto`, nativa do Node.js.
Você pode instalar o Node.js junto com o *Node Package Manager* (npm) pelo site oficial do Node. Segue o link abaixo:

[Node.js](https://nodejs.org/en/download/package-manager)

## Configuração Inicial ⚙️

Para poder utilizar a aplicação, clone o repositório remoto para a sua máquina local, através do comando:
`git clone https://github.com/josec-junior/`

Após clonar o repositório, abra-o em um terminal ou alguma IDE, como o *Visual Studio Code*.

## Executando a aplicação ▶️

O arquivo `package.json` já possui um script responsável por executar a aplicação, basta executar o comando: `npm start`.

Se tudo estiver configurado corretamente, será exibido no console algo como:

```plaintext
Genesis Block
    Hash: 7ce64d8df3c01be4bb5529778d74cb1f75bc5ee4f10c2ceabbc8d50e27f14ceb
    Previous Hash: 0
    Data: Genesis Block
    Timestamp: Fri Oct 11 2024 - 12:32:53 GMT-0300 (Horário Padrão de Brasília)
Block #1
    Hash: cef3cbffe26bc5f02c7311e867c9a48b2ff34e2961ca36aa404771d1a796406a
            Previous Hash: 7ce64d8df3c01be4bb5529778d74cb1f75bc5ee4f10c2ceabbc8d50e27f14ceb
            Data: Primeira transação realizada após o Bloco Gênesis
            Timestamp: Fri Oct 11 2024 - 12:32:53 GMT-0300 (Horário Padrão de Brasília)
Block #2
            Hash: 90a62b1019e1fd31f6424de18ffdff9e73ce2d2c5aca19d35393aa41dc6a01fa
            Previous Hash: cef3cbffe26bc5f02c7311e867c9a48b2ff34e2961ca36aa404771d1a796406a
            Data: Segunda transação realizada após o bloco gênesis
            Timestamp: Fri Oct 11 2024 - 12:32:53 GMT-0300 (Horário Padrão de Brasília)

1º Teste - Esta Blockchain é válida? true

2º Teste - A Blockchain é válida após modificar os dados do bloco da primeira transação? false

3º Teste - A Blockchain é valída após modificar o hash do bloco da primeira transação? false
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
- Validar a cadeia. 

## Considerações Finais 🔮

Como mencionado no início deste `README`, este projeto simula um sistema de *Blockchain* simples, sem a presença do *Nonce* de cada bloco e consequentemente sem a presença do sistema de mineração e *Proof of Work*, além disso, os dados são **mockados**, sinta-se a vontade para implementar melhorias no código, como o *Nonce* de cada bloco, o sistema de mineração e uma entrada de dados dinâmica.

<!-- Imagens centralizadas utilizando HTML -->
<p align = "center">
    <img src = "https://github.com/user-attachments/assets/50d96dcf-a9d0-42cf-8c28-585896b8c7fc" alt = "Logo Compass UOL" width = "100">
</p>
<p align = "center">
    <img src = "https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&" alt = "License">
</p>
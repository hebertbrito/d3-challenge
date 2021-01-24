# D3 Challange
> Informações para execução do desafio

## Ferramentas necessario para teste local
* Node - LTS Version

## Execução do arquivo local
* va até a pasta raiz do projeto pelo CMD e digite o comando e execute:
    * npm i
* Executar o teste:
    * ainda na pasta raiz do projeto execute o comando "npm run test"
* Executar o projeto principal
    * ainda na pasta raiz do projeto execute o comando "npm run start"

## Execução do arquivo no Docker
* No CMD e na pasta raiz do projeto execute:
    * docker build -t d3/brito .
* Espera criar a imagem, caso error verificar os erros antes de prosseguir, então execute:
    * docker run d3/brito

# EXTRA
> ARQUITETURA

```sh
Microsservice
```

<img src="./src/assets/d3-challenge.png"
     alt="architecture multi containers"
     style="float: left; margin-right: 10px;" />
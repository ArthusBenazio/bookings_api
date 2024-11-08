# Bookings API

Um projeto de estudo que implementa uma API para gerenciamento de reservas, utilizando diversas tecnologias modernas de desenvolvimento web.

## Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **Node.js**: Ambiente de execução de JavaScript no lado do servidor.
- **Fastify**: Framework web rápido e de baixo overhead para Node.js.
- **pg-promise**: Biblioteca para interação com bancos de dados PostgreSQL.
- **bcrypt**: Biblioteca para hashing de senhas para garantir a segurança.
- **jsonwebtoken**: Ferramenta para autenticação usando tokens JWT.
- **dotenv**: Gerenciamento de variáveis de ambiente para manter as credenciais seguras.
- **uuid**: Geração de identificadores únicos universais.

## Funcionalidades

- Criação de usuários com armazenamento seguro de senhas.
- Autenticação e autorização usando JWT.
- Operações de CRUD para reservas.
- Integração com banco de dados PostgreSQL para persistência de dados.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [PostgreSQL](https://www.postgresql.org/)

## Instalação

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/seu-usuario/bookings-api.git
   cd bookings-api

2. **Instale as dependências**:
  npm install

3. **Configure as variáveis de ambiente: Crie um arquivo .env na raiz do projeto e adicione suas configurações**:
  DATABASE_URL=
  JWT_SECRET=

4. **Execute a aplicação**:
  Para rodar em modo de desenvolvimento com watch:
  npm run dev

  Para rodar em modo de produção:
  npm start

## Créditos
  Este projeto foi inspirado e guiado pelo conteúdo educacional da OneBitCode
  https://www.youtube.com/@OneBitCode 

## Uso
  Acesse a API em http://localhost:3000 (ou outra porta configurada).
  Utilize ferramentas como Postman para testar as rotas e endpoints.

## Contribuição
  Este projeto é de caráter educacional e não aceita contribuições externas. Sinta-se à vontade para clonar e modificar para uso próprio.
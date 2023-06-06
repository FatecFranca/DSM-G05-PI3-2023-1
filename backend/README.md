<img src="../Documentos/img/BannerPI3s.png" title="logo">

<br><br>
# 🔧🪛 See My Place (API RESTful) 🏠

Repositório destinado aos códigos do backend da aplicação.
<br><br>

## 💻 Variáveis de Ambiente
Para rodar este projeto, é necessario adicionar as seguintes variáveis de ambiente no seu .env

`MONGO_URL="(url local ou do atlas)"`

`PORT="xxxx"`
<br><br>

## 🛡️ Variáveis de segurança
No arquivo .env é necessário acrescentar variáveis de segurança para o JWT.

`JWT_SECRETE="32 caracteres aleatorios"`

<br>

## 🚥🚥 Rodando localmente
Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```
<br><br>

## 📃 Documentação da API
<br>

### Métodos
<br>

| Método   | Descrição | 
| :---------- | :--------- | 
| `GET` | Retorna informações de um ou mais registros. | 
| `POST ` | Utilizado para criar um novo registro. | 
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |
<br>

### Login cliente e corretor
<br>

```http
  POST http://localhost:3001/auth/login/cliente

  POST http://localhost:3001/auth/login/corretor
```
  Exemplo de dados no `Body`
  ```
  {
    "email": "admin@gmail.com",
    "senha": "123456"
  }
  ```
  Exemplo de `Response` possível. Retornando o `token` e os dados do `usuário` logado.  
  ```
  {
    {
	"token": {
		"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
	},
	"cliente": {}
}
  ```
<br>

### Agenda
<br>

`Criação` de uma nova agenda
```http
  POST http://localhost:3001/agenda
```
```
  Body
  {
    "nome": "teste",
    "data": "25-05-2023",
    "horario": "13:00",
    "cliente": "645a4fe4bb501e10228fbdd2",
    "imovel": "64622e8ef166410e47b254b2",
    "corretor": "64622ea9f166410e47b254b7"
  }
```
Método para busca de `todos` ou por `id`
```http
  GET http://localhost:3001/agenda

  GET http://localhost:3001/agenda/646230b7fc3fa65d984ca85f
```
```
  Body
  {
    "id": "646230b7fc3fa65d984ca85f",
    "nome": "teste",
    "data": "25-05-2023",
    "horario": "14:00",
    "cliente": {},
    "corretor": {},
    "imovel": {} 
  }
```
  `Atualizar` uma agenda. <kbd>È nescessário Token de admin<kbd> 
```http
  PUT http://localhost:3001/agenda/64640b67918028fa65d9d17d
```
  `Deletar` uma agenda. <kbd>È nescessário Token de admin<kbd>
```http
  DELETE http://localhost:3001/agenda/64640b67918028fa65d9d17d
```
<br>

### Cliente
<br>

`Criação` de um novo cliente
```http
  POST http://localhost:3001/cliente
```
Exemplo de `body`, sendo o endereço opcinal.
```
{
	"nome": "cliente 2",
	"telefone": "31654984",
	"cpf": "65165423654",
	"email": "cliente2@gmail.com",
	"endereco": {},
	"senha": "123456"
}
```
Método para busca de `todos`, `id`. <kbd>È nescessário Token de admin, corretor ou cliente<kbd>
```http
  GET http://localhost:3001/cliente

  GET http://localhost:3001/cliente/646230b7fc3fa65d984ca85f
```
Get de pesquisa por `nome` ou `email`.
```http
  GET http://localhost:3001/cliente/search?email=teste3%40gmail.com
```
```
Response
{
  "id": "645a4fe4bb501e10228fbdd2",
  "nome": "teste",
  "telefone": "31654984",
  "cpf": "6465162132",
  "email": "teste3@gmail.com",
  "endereco": {}
}
```
`Atualizar` um cliente. <kbd>È nescessário Token de admin <kbd>
```http
  PUT http://localhost:3001/cliente/64640b67918028fa65d9d17d
```
  `Deletar` um cliente. <kbd>È nescessário Token de admin<kbd>
```http
  DELETE http://localhost:3001/cliente/64640b67918028fa65d9d17d
```
<br>

### Corretor
<br>

`Criação` de um novo corretor
```http
  POST http://localhost:3001/corretor
```
Exemplo de `body`, sendo o endereço opcinal.
```
{
	"nome": "corretor 2",
	"telefone": "31654984",
	"cpf": "65165423654",
	"email": "corretor2@gmail.com",
	"endereco": {},
	"senha": "123456"
}
```
Método para busca de `todos`, `id`. <kbd>È nescessário Token de admin ou corretor<kbd>
```http
  GET http://localhost:3001/corretor

  GET http://localhost:3001/corretor/646230b7fc3fa65d984ca85f
```
```
Response
{
  "id": "645a4fe4bb501e10228fbdd2",
  "nome": "teste",
  "telefone": "31654984",
  "cpf": "6465162132",
  "email": "teste3@gmail.com",
  "endereco": {}
}
```
`Atualizar` um corretor. <kbd>È nescessário Token de admin ou corretor <kbd>
```http
  PUT http://localhost:3001/corretor/64640b67918028fa65d9d17d
```
  `Deletar` um corretor. <kbd>È nescessário Token de admin <kbd>
```http
  DELETE http://localhost:3001/corretor/64640b67918028fa65d9d17d
```
<br>

### Imovel
<br>

`Criação` de um novo imovel
```http
  POST http://localhost:3001/imovel
```
Exemplo de `body`.
```
{
	"proprietario": "outra",
	"area": "150M2",
	"qtde_quartos": 3,
	"qtde_banheiros": 3,
	"valor": 150000,
	"tipo": "residencia",
	"finalidade": "outra",
	"endereco": {
		"rua": "khakjhd",
		"numero": "13212",
		"bairro": "bairro1",
		"cidade": "franca",
		"estado": "sp",
		"cep": "61544"
	}
}
```
Método para busca de `todos`, `id`.
```http
  GET http://localhost:3001/imovel

  GET http://localhost:3001/imovel/646230b7fc3fa65d984ca85f
```
Get de pesquisa por `endereço` ou `tipo`.
```http
  GET http://localhost:3001/imovel/search
```
```
Response
{
  "id": "645a4fe4bb501e10228fbdd2",
  "nome": "teste",
  "telefone": "31654984",
  "cpf": "6465162132",
  "email": "teste3@gmail.com",
  "endereco": {}
}
```
  `Atualizar` um imovel. <kbd>È nescessário Token de admin <kbd> 
```http
  PUT http://localhost:3001/imovel/64640b67918028fa65d9d17d
```

  `Deletar` um imovel. <kbd>È nescessário Token de admin <kbd>
```http
  DELETE http://localhost:3001/imovel/64640b67918028fa65d9d17d
```
<br><br>

## 📝 Stack utilizada

**Back-end:**
- [NestJS](https://nestjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
<br><br>

## Licença

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

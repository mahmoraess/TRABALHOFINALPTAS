Biblioteca Virtual 

Este é um sistema simples de gerenciamento de livros via API.

##  Como rodar o projeto

1. Instale as dependências:
   npm install
   
2. Inicie o servidor:
   node app.js
   
3. Acesse a API via http://localhost:3000/livros

##  Rotas disponíveis e como testar

### ➤ Criar um novo livro
- *Método:* POST
- *URL:* http://localhost:3000/livros
- *Corpo da requisição (JSON):*
  json
  {
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien"
  }
  
- *Resposta esperada:*
  json
  {
    "id": 1,
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien"
  }
  


### ➤ Listar todos os livros
- *Método:* GET
- *URL:* http://localhost:3000/livros
- *Resposta esperada:*
  json
  [
    {
      "id": 1,
      "titulo": "O Senhor dos Anéis",
      "autor": "J.R.R. Tolkien"
    }
  ]
  


### ➤ Buscar um livro por ID
- *Método:* GET
- *URL:* http://localhost:3000/livros/:id
- *Exemplo:* http://localhost:3000/livros/1
- *Resposta esperada:*
  json
  {
    "id": 1,
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien"
  }

### ➤ Atualizar um livro
- *Método:* PUT
- *URL:* http://localhost:3000/livros/:id
- *Exemplo:* http://localhost:3000/livros/1
- *Corpo da requisição (JSON):*
  json
  {
    "titulo": "O Hobbit",
    "autor": "J.R.R. Tolkien"
  }
- *Resposta esperada:*
  json
  {
    "id": 1,
    "titulo": "O Hobbit",
    "autor": "J.R.R. Tolkien"
  }
  
### ➤ Excluir um livro
- *Método:* DELETE
- *URL:* http://localhost:3000/livros/:id
- *Exemplo:* http://localhost:3000/livros/1
- *Resposta esperada:*
  json
  {
    "mensagem": "Livro removido com sucesso"
  }
  

## 🛠 Como testar com Postman
1. Abra o Postman.
2. Escolha o método (POST, GET, PUT, DELETE).
3. Insira a URL correspondente.
4. Se necessário, vá para a aba *Body, selecione* *raw* e escolha o formato *JSON*.
5. Adicione o JSON de exemplo no corpo da requisição.
6. Clique em *Send* e verifique a resposta.
 

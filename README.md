Primeiramente clone o repositório do projeto usando o Git: https://github.com/mahmoraess/TRABALHOFINALPTAS

Depois use o comando 'npm install' para instalar as dependências do projeto 

Veja se o MongoDB está rodando o banco padrão (Livros) na porta 27017.
 
precisamos inicializar o servidor use o comando no terminal (ele vai rodar nosso arquivo app.js): npm start

O servidor já estará rodando em http://localhost:3333 e estará conectado ao MongoDB


Para testar as rotas siga as instruções no Insomnia:

Para adicionar um novo livro use o método POST e a rota: /livros. Vá no body, selecione a opção JSON e coloque a estrutura: 
{
    // Nome do Livro (string)
  "nome": "nome livro"
    // Nome do autor (string)
  "autor": "autor livro"
}

Para listar todos os livros use o método GET e a rota: /livros

Para buscar livro por ID também use o método GET e a rota: /livros/:id

Para atualizar um livro use o método PUT e a rota /livros/:id. Vá no body novamente e coloque os novos valores. Ex: 
{
  "nome": "novo nome",
  "autor": "novo autor"
}

Para excluir um livro use o método DELETE e a rota: /livros/:id
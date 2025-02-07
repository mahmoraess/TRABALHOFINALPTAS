Primeiramente clone o repositório do projeto usando o Git: https://github.com/mahmoraess/TRABALHOFINALPTAS

Abra o projeto no vscode

Depois use o comando 'npm install' no terminal para instalar as dependências do projeto 

Crie um banco chamado Livros no localhost:27017 e crie uma collection chamada livros
 
precisamos inicializar o servidor use o comando no terminal (ele vai rodar nosso arquivo app.js): npm start

O servidor já estará rodando em http://localhost:3333 e estará conectado ao MongoDB


Para testar as rotas siga as instruções no Insomnia:

Para adicionar um novo livro use o método POST e a rota: /livros. Vá no body, selecione a opção JSON e coloque a estrutura: 
{
    //Nome do Livro
  "nome": "nome livro"
    //Nome do autor
  "autor": "autor livro"
}

Para listar todos os livros use o método GET e a rota: /livros

Para buscar livro por ID também use o método GET e a rota: /livros/:id

Para atualizar um livro use o método PUT e a rota /livros/:id. Vá no body novamente e coloque os novos valores. Ex: 
{
    //Nome do Livro 
  "nome": "novo nome",
    //Nome do autor 
  "autor": "novo autor"
}

Para excluir um livro use o método DELETE e a rota: /livros/:id
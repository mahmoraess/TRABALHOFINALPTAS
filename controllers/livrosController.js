import {randomUUID} from 'node: crypto'

let alunos = [
    { 
        id: randomUUID(),
        nome: 'O Morro dos Ventos Uivantes', 
        autor: 'Emily Bronte'
    }
]

const listarLivros = (req, res) => {
    res. json(livros)
}

const addLivro = (req, res) => {
    const (nome, autor) = req. body

    if (!nome || !idade || !turma) {
        return res json({
            erro: true,
            mensagem: 'Falta valores a inserir'
        })}
    }
    const livro = {
        id: randomUUID(), 
        nome, 
        autor,
        }

        try {
            livros.push (livro)
            return res.json({
                erro: false,
                mensagem: 'Valor inserido no banco'
            })
         catch (error) {
            console.log(error)
            return res.json ({
                erro: true,
                mensagem: error
        })
    }
}

const buscarLivroPorId = (req, res) => {
    const {id} = req.params
    const livro = livro.find((l) => l.id === parseInt(id))

    if(!livro) {
        return res.json ({
            erro: true,
            mensagem: 'livro não encontrado'
        })
    }
    res.json(livro)
}

const atualizarLivro = (req, res) => {
    const {id} = req.params;
    const {nome, autor}= req.body;

    const livro = livros.find((l) => l.id === (id));

    if (!livro){
        return res.json({
            erro: true,
            mensagem: 'livro não encontrado'
        })
    }

    if (!nome || !autor) {
        return res.json({
            erro: true,
            mensagem: 'Todos os campos são obrigatórios'
        })
    }

    livro.nome = nome;
    livro.autor = autor;

    res.json({
        erro: false,
        mensagem: 'livro alterado com sucesso'
        livro
    })
}

const excluirLivro = (req, res) => {
    const {id} = req.params;
    const index = livros.findIndex((l) => l.id === (id))

    if(index === -1){
        return res.json({
            erro: true,
            mensagem: 'Livro não encontrado'
        })
    }

    livros.splice(index, 1);
    res.json({
        erro: false,
        mensagem: 'Livro deletado'
    })
}

    export {listarLivros, addLivro, buscarLivroPorId, atualizarLivro, excluirLivro}
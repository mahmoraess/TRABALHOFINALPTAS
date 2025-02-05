import { Livro } from "../models/livros.js";


const listarLivros = async (req, res) => {
    try {
        const livros = await Livro.find()
        res.json(livros)
    } catch (error) {
        return {
            erro: true,
            mensagem: 'Erro ao fazer requisição'
        }
    }
}

const addLivro = (req, res) => {
    const {nome, autor} = req.body

    if (!nome || !autor) {
        return res.json({
            erro: true,
            mensagem: 'Falta valores a inserir'
        })
    }
    const livro = new Livro({nome, autor})

        try {
            livro.save()
            return res.json({
                erro: false,
                mensagem: 'Valor inserido no banco',
                livro
            })
        } catch (error) {
            console.log(error)
            return res.json ({
                erro: true,
                mensagem: 'Erro ao fazer requisição'
        })
    }
}

const buscarLivroPorId = async (req, res) => {
    
    try {
        const {id} = req.params
        const livro = await Livro.findById(id);
    
        if(!livro) {
            return res.json ({
                erro: true,
                mensagem: 'livro não encontrado'
            })
        }
        res.json(livro)
        
    } catch (error) {
        console.log(error)
        return res.json({
            erro: true,
            mensagem: 'ID inválido'
        })
    }
}

const atualizarLivro = async (req, res) => {
    try{
        const {id} = req.params;
        const livro = await Livro.findByIdAndUpdate(id, req.body, {new: true})
        if (!livro){
            return res.json({
                erro: true,
                mensagem: 'Livro não encontrado'
            })
        }
        res.json({
            erro: false, 
            livro
        })
    } catch (error) {
        res.json({
        erro: true,
        mensagem: 'livro não encontrado'
        })
    }
}

const excluirLivro = async (req, res) => {
    try{
        const {id} = req.params
        const livro = await Livro.findByIdAndDelete(id)
        if (!livro){
            return res.json({
                erro: true,
                mensagem: 'Livro não encontrado'
            })
        }
        res.json({
            erro: false,
            mensagem: 'Livro excluído com sucesso'
        })
    } catch (error){
        console.log(error)
        res.json({
            erro: true,
            mensagem: error
        })
    }
}

    export {listarLivros, addLivro, buscarLivroPorId, atualizarLivro, excluirLivro}
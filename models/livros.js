import {Schema, model} from "mongoose"; 

const livrosSchema = new Schema({
    nome: {
        type: String, 
        required: true
    },
    autor: {
        type: String, 
        required: true
    }
})

    
const Livro = model('Livros', livrosSchema)
    
export {Livro}
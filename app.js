import express from 'express'
import {router} from './routes/livrosRoutes.js'
const app = express()
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/Livros').then(() => {
    console. log ('Conectado ao MongoDB' )
}) . catch ( err => {
    console.error ('Erro ao conectar ao MongoDB: ', err)
})

app.use(express.json())

app.use('/livros', router)
app.listen(3333, () => {
    console.log('Servidor Rodando na porta 3333')
})
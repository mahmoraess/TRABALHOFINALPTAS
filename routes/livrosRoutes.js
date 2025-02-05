import express from 'express'
import {addLivro, listarLivros, buscarLivroPorId, atualizarLivro, excluirLivro} from '../controllers/livrosController.JS';
const router = express.Router();

router.post('/', addLivro);
router.get('/', listarLivros);
router.get('/:id', buscarLivroPorId);
router.put('/:id', atualizarLivro);
router.delete('/:id', excluirLivro);

export {router}

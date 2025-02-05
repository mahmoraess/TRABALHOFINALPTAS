import express from 'express'
import { addLivro, atualizarLivro, buscarLivroPorId, excluirLivro, listarLivros } from '../controllers/livrosController.js';
const router = express.Router();

router.post('/', addLivro);
router.get('/', listarLivros);
router.get('/:id', buscarLivroPorId);
router.put('/:id', atualizarLivro);
router.delete('/:id', excluirLivro);

export {router}

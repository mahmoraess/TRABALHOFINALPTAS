const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController');

// Rotas CRUD
router.post('/', livrosController.criarLivro);
router.get('/', livrosController.listarLivros);
router.get('/:id', livrosController.buscarLivroPorId);
router.put('/:id', livrosController.atualizarLivro);
router.delete('/:id', livrosController.excluirLivro);

module.exports = router;

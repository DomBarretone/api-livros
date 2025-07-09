const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livros.controller');

router.get('/', livrosController.getAllLivros);
router.get('/:id', livrosController.getLivro);
router.post('/', livrosController.createLivro);
router.put('/:id', livrosController.updateLivro);
router.delete('/:id', livrosController.deleteLivro);

module.exports = router;

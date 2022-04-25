import express from 'express';
import LivrosController from '../controller/livrosController.js';

const router = express.Router()

router
    .get("/livros", LivrosController.listarLivros)
    .get("/livros/:id", LivrosController.listarLivroPorId)
    .post("/livros", LivrosController.cadastrarLivro)
    .put("/livros/:id", LivrosController.atualizarLivro)
    .delete("/livros/:id", LivrosController.apagarLivro)

export default router
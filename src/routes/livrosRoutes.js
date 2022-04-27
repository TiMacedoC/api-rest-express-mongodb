import express from 'express';
import livrosController from '../controller/livrosController.js';

const router = express.Router()

router
    .get("/livros", livrosController.listarLivros)
    .get("/livros/busca", livrosController.listarLivrosPorEditora)
    .get("/livros/:id", livrosController.listarLivroPorId)
    .post("/livros", livrosController.cadastrarLivro)
    .put("/livros/:id", livrosController.atualizarLivro)
    .delete("/livros/:id", livrosController.apagarLivro)

export default router
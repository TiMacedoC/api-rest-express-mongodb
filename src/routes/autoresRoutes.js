import express from 'express';
import autoresController from '../controller/autoresController.js';

const router = express.Router()

router
    .get("/autores", autoresController.listarAutores)
    .post("/autores", autoresController.cadastrarAutor)
    .get("/autores/:id", autoresController.listarAutorPorId)
    .put("/autores/:id", autoresController.atualizarAutor)
    .delete("/autores/:id", autoresController.apagarAutor)


export default router
import livros from "../models/Livro.js"


class LivroController {

    listarLivros(req, res) {
        livros.find()
            .populate('autor')
            .exec(
                (erro, livros) => {
                    if (erro) {
                        console.log('erro:', erro)
                        res.send({ error: erro.message })
                    } else {
                        res.send(livros)
                    }
                })
    }

    listarLivroPorId(req, res) {
        const id = req.params.id
        livros.findById(id)
            .populate('autor', 'nome')
            .exec((error, livro) => {
                if (error) {
                    res.status(400).send(error)
                } else {
                    res.status(200).send(livro)
                }
            })
    }

    listarLivrosPorEditora(req, res) {
        const { busca } = req.body

        //Primeiro testa se a requisição checou com um body
        if (!busca) {
            res.status(400).send({
                message: "req json body is needed",
                exemploDeBody: { "busca": "nome da editora" }
            })
        } else {
            livros.find()
                .populate('autor')
                .exec(
                    (erro, livros) => {
                        if (erro) {
                            res.send(erro)
                        } else {
                            const result = livros.filter((livro) => livro.editora == busca)

                            if (result.length > 0) {
                                res.send(result)
                            } else {
                                res.send("nenhum livro encontrado")
                            }
                        }
                    }
                )
        }
    }

    cadastrarLivro(req, res) {
        const livro = new livros(req.body)
        livro.save((error) => {
            if (error) {
                res.status(500).send({ error: error.message })
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    atualizarLivro(req, res) {
        const { id } = req.params
        console.log('id:', id)

        livros.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (error) {
                res.status(500).send(error)
            } else {
                livros.findById(id, (__, livro) => {
                    res.status(200).send(livro)
                })
            }
        })
    }

    apagarLivro(req, res) {
        const { id } = req.params

        livros.findByIdAndDelete(id, (error) => {
            if (error) {
                res.status(500).send(error)
            } else {
                res.send({ message: "Livro apagado com sucesso" })
            }
        })


    }


}

export default new LivroController()


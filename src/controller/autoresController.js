import autores from "../models/Autor.js"

class AutoresController {

    listarAutores(req, res) {
        autores.find((erro, autores) => {
            if (erro) {
                res.send({ error: erro.message })
            } else {
                res.send(autores)
            }
        })
    }

    listarAutorPorId(req, res) {
        const id = req.params.id
        autores.findById(id, (error, autor) => {
            if (error) {
                res.status(400).send(error)
            } else {
                res.status(200).send(autor)
            }
        })
    }

    cadastrarAutor(req, res) {
        const autor = new autores(req.body)

        autor.save((error) => {
            if (error) {
                res.status(500).send(error)
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    atualizarAutor(req, res) {
        const { id } = req.params

        autores.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (error) {
                res.status(500).send(error)
            } else {
                autores.findById(id, (__, autor) => {
                    res.status(200).send(autor)
                })
            }
        })
    }

    apagarAutor(req, res) {
        const { id } = req.params

        autores.findByIdAndDelete(id, (error) => {
            if (error) {
                res.status(500).send(error)
            } else {
                res.send({ message: "Autor apagado com sucesso" })
            }
        })
    }
}


export default new AutoresController()



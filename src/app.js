// const app = require('./expressConfig')
import app from '../config/expressConfig.js'

const livros = [
    { id: 1, titulo: "Senhor dos Anéis" },
    { id: 2, titulo: "O Hobbit" },
]

app.get('/', (req, res) => {
    res.status(200).send("Curso de node")
})

app.get('/livros', (req, res) => {
    res.status(200).send(livros)
})

app.get('/livros/:id', (req, res) => {
    const id = req.params.id
    const index = findById(id)
    res.status(200).send(index !== -1 ? livros[index] : "Nenhum livro encontrado")
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send("post efetuado")
})

app.put('/livros/:id', (req, res) => {
    const id = req.params.id

    const index = findById(id)
    livros[index].titulo = req.body.titulo

    res.status(201).send(livros[index])
})

app.delete('/livros/:id', (req, res) => {
    const id = req.params.id
    const index = findById(id)
    livros.splice(index, 1)

    res.send(`Livro ${id} excluído com sucesso`)

})

function findById(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app
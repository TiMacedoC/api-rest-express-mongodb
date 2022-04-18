// const app = require('./expressConfig')
import app from './expressConfig.js'

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

export default app
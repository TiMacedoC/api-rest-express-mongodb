import livros from './livrosRoutes.js'

const routes = (app) => {

    app.route('/').get((req, res) => {
        res.status(200).send({ message: "curso de node" })
    })

    app.use(livros)

}

export default routes
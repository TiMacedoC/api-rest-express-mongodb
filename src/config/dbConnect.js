import mongoose from "mongoose";

export default () => {
    const uri = `mongodb+srv://timacedoc:tiago1993@cluster0.u7lqu.mongodb.net/livraria`

    mongoose.connect(uri)

    let db = mongoose.connection

    db.on("error", console.log.bind(console, 'Erro de conexão'))
    db.once("open", () => {
        console.log("Conexão com o banco feita com sucesso");
    })
}
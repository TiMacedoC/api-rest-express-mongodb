import dbConnection from './config/dbConnect.js'
import routes from './routes/index.js'
import cors from 'cors'
import express from 'express'


const app = express()

appConfig: {
    app.use(cors())
    app.use(express.json())
}

dbConnection()
routes(app)

export default app
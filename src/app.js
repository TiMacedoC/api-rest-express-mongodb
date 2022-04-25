import app from './config/expressConfig.js'
import dbConnection from './config/dbConnect.js'
import routes from './routes/index.js'

dbConnection()
routes(app)

export default app
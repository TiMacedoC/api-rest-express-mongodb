// const app = require('./src/app')
import app from './src/app.js'

const port = process.env.PORT || 3000

app.listen(port, () => { console.log(`Servidor ouvindo http://localhost:${port}/`) })
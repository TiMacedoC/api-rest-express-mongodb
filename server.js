const app = require('./expressConfig')
const port = 3000

app.listen(port, () => { console.log(`Servidor ouvindo http://localhost:${port}/`) })

app.get('/', (req, res) => {
    console.log('req:', req.url)
    res.send('getttttt')
})

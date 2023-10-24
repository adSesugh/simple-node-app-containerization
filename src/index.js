const express = require('express');

const app = express()
const PORT = process.env.PORT | 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello DevOps')
})

app.get('/hello/:name', (req, res) => {
    const { name } = req.params
    res.send(`Hello ${name}!`)
})

app.listen(PORT, () => {
    console.log('Server is running')
})


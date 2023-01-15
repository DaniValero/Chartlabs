const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()
require('./startup/db')()


const registro = require('./routes/registro')
const noticias = require('./routes/noticias')
const posts = require('./routes/posts')
const login = require('./routes/auths')

app.use('/login', login)

app.use('/registro', registro)

app.use('/noticias', noticias)

app.use('/post', posts)

app.listen(5000, () => console.log("Reptiliano afroamericano"))
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()
require('./startup/db')()


const registro = require('./routes/registro')

app.post('/registro', registro)

app.listen(3000, () => console.log("Esto no hay quien lo remonte"))
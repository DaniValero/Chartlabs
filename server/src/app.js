const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

require('dotenv').config()


const helmet = require("helmet");

require('./startup/routes')(app)
require('./startup/db')()


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Chartlabs server ON port: ${port}`))
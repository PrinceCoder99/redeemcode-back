const connectToMongo = require('./db');
const express = require('express')
const dotenv = require('dotenv')
var cors = require('cors')
const path = require('path')

connectToMongo();
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`)
})
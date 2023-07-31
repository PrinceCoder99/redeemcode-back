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

// Your code
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  
  app.use(express.static(path.resolve(__dirname, 'client/build')));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  })
}
// Your code


app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`)
})
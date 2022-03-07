const express = require('express')
const cors = require('cors')
const router = require('./config/routes');

const port = 8080
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
  console.log("Listening to port: ", port)
})
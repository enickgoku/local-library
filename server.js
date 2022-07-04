const express = require('express')
const path = require('path')
const cors = require('cors')

require('dotenv/config')

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, 'root')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'root', 'index.html'))
})

app.listen(process.env.PORT || 3000)

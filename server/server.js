const express = require('express')
const app = express()

const directory = 'public'

app.use(express.static(directory))

app.listen(3000, () => {
  console.log(`Serving ${directory} on port 3000`)
})

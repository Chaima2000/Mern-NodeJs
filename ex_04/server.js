const express = require('express')
const app = express()
const port = 4242
const path = require('path')

app.engine('html', require('ejs').renderFile)


app.get('/name/:name?', (req, res) => {
  const name = req.params.name || 'unknown';

  res.render(path.join(__dirname, '/index.html'), {name})

 
})

app.listen(port, () => {
  console.log(` ${port}`)
})
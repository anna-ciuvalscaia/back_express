const express = require('express')
const app = express()
const port = 3000

const products = require("./data/products.json")

// middleware
app.use(express.static('public'));
// router
// when a GET request arrives
//app.get('/', (req, res) => {
//  res.send('Home page')
//})

////////////////// API routes ///////////////
app.get('/api/products', (req, res) => {
    res.json(products)
  })
  app.get('/api/products/:id', (req, res) => {
    let id = req.params.id
    // HW1 use another Array
    let product = null || products.find(products => products.id == id) 
  {/*  let product = null
    for(let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        product = products[i]
        break
      }
    }*/}
    res.json(product)
  }) 
////////////////// API routes ///////////////


// starting the express server app
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
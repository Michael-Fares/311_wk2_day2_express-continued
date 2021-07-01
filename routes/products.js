const express = require('express')
const router = express.Router()
const products = require('./data/products.js')


router.get('/products', (req, res) => {
  res.json(products);
})

router.get('/products/:id', (req, res) => {
  const item = products.find(i => i._id == req.params.id)
  res.json(item);
})

router.post('/products', (req, res) => {
  const product = {
  _id: products[products.length - 1]._id + 1,
  name: req.body.name,
  description: req.body.description,
  rating: req.body.rating,
  price: req.body.price,
  category: req.body.category,
  reviews: []
  }
  products.push(product)
  res.json(product);
})

module.exports = router
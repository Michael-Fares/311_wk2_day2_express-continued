const express = require('express')

const products = require('../data/products.js')

const list = (req, res) => {
  res.json(products);
}
const show = (req, res) => {
  const item = products.find(product => product._id == req.params.id)
  res.json(item);
}

const create = (req, res) => {
  const product = {
  _id: products[products.length - 1]._id + 1,
  name: req.body.name,
  description: req.body.description,
  rating: req.body.rating,
  imgUrl: req.body.imgUrl,
  price: req.body.price,
  category: req.body.category,
  reviews: []
  }
  products.push(product)
  res.json(product);
}

module.exports = { list, show, create }
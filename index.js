const express = require("express");
const bodyParser = require("body-parser");
// require data from the target directories
const contacts = require('./data/contacts.js');
const vehicles = require('./data/vehicles.js');
const comments = require('./data/comments.js');
const products = require('./data/products.js');
const app = express();

  // tell our Express server to serve the files in the public folder

app.use(express.static('public'))

// add body parser

app.use(bodyParser.json());

const port = process.env.PORT || 4001;

//  routes to get lists
app.get('/contacts', (req, res) => {
  res.json(contacts);
})
app.get('/vehicles', (req, res) => {
  res.json(vehicles);
})
app.get('/comments', (req, res) => {
  res.json(comments);
})
app.get('/products', (req, res) => {
  res.json(products);
})

// routes to get individual items
app.get('/contacts/:id', (req, res) => {
  const item = contacts.find(i => i._id == req.params.id)
  res.json(item);
})
app.get('/vehicles/:id', (req, res) => {
  const item = vehicles.find(i => i._id == req.params.id)
  res.json(item);
})
app.get('/comments/:id', (req, res) => {
  const item = comments.find(i => i._id == req.params.id)
  res.json(item);
})
app.get('/products/:id', (req, res) => {
  const item = products.find(i => i._id == req.params.id)
  res.json(item);
})

// routes to create one thing

app.post('/contacts', (req, res) => {
  const contact = {
    _id: contacts[contacts.length - 1]._id + 1,
    name: req.body.name,
    occupation: req.body.occupation
  }
  contacts.push(contact)
  res.json(contact)
})
app.post('/vehicles', (req, res) => {
  const car =  {
    _id: vehicles[vehicles.length - 1]._id + 1,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: req.body.isNew
}
  vehicles.push(car)
  res.json(car);
})
app.post('/comments', (req, res) => {
  const comment = {
    _id: comments[comments.length - 1]._id + 1,
    body: req.body.body,
    postId: comments[comments.length - 1].postId + 1
}
  comments.push(comment)
  res.json(comment);
})
app.post('/products', (req, res) => {
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

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

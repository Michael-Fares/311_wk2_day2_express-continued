const express = require('express')
const router = express.Router()
const vehicles = require('./data/vehicles.js')


router.get('/vehicles', (req, res) => {
  res.json(vehicles);
})

router.get('/vehicles/:id', (req, res) => {
  const item = vehicles.find(i => i._id == req.params.id)
  res.json(item);
})

router.post('/vehicles', (req, res) => {
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

module.exports = router
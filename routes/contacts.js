const express = require('express')
const router = express.Router()
const contacts = require('./data/contacts.js')


router.get('/contacts', (req, res) => {
  res.json(contacts);
})

router.get('/contacts/:id', (req, res) => {
  const item = contacts.find(i => i._id == req.params.id)
  res.json(item)
})


router.post('/contacts', (req, res) => {
  const contact = {
    _id: contacts[contacts.length - 1]._id + 1,
    name: req.body.name,
    occupation: req.body.occupation
  }
  contacts.push(contact)
  res.json(contact)
})

module.exports = router
const express = require('express')

const contacts = require('../data/contacts.js')

const list = (req, res) => {
  res.json(contacts);
}
const show = (req, res) => {
  const item = contacts.find(i => i._id == req.params.id)
  res.json(item)
}
const create = (req, res) => {
  const contact = {
    _id: contacts[contacts.length - 1]._id + 1,
    name: req.body.name,
    occupation: req.body.occupation
  }
  contacts.push(contact)
  res.json(contact)
}

module.exports = { list, show, create }
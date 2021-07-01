const express = require('express')

const comments = require('../data/comments.js')

const list = (req, res) => {
  res.json(comments);
}
const show = (req, res) => {
  const item = comments.find(i => i._id == req.params.id)
  res.json(item);
}
const create = (req, res) => {
  const comment = {
    _id: comments[comments.length - 1]._id + 1,
    body: req.body.body,
    postId: comments[comments.length - 1].postId + 1
}
  comments.push(comment)
  res.json(comment);
}

module.exports = { list, show, create }
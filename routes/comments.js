const express = require('express')
const router = express.Router()
const comments = require('./data/comments.js')

router.get('/comments', (req, res) => {
  res.json(comments);
})

router.get('/comments/:id', (req, res) => {
  const item = comments.find(i => i._id == req.params.id)
  res.json(item);
})

router.post('/comments', (req, res) => {
  const comment = {
    _id: comments[comments.length - 1]._id + 1,
    body: req.body.body,
    postId: comments[comments.length - 1].postId + 1
}
  comments.push(comment)
  res.json(comment);
})

module.exports = router
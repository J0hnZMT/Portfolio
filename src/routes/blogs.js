const express = require('express')
const router = express.Router()

const postService = require('../services/blogPostService')

/* Create a post */
router.post(`/create`, async (req, res) => {
  const { userid, title, post, postdate } = req.body

  const results = await postService.createPost(userid, title, post, postdate)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: "Blog Post Successfully Created!"
      })
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: "Blog Post Failed to create!"
      })
  }
})

/* Get all posts */
router.get(`/all`, async (req, res) => {
  const fields = ['id', 'userid', 'title', 'post', 'postdate']

  const results = await postService.getAllPost(fields)

  if (results) {
    res
      .status(200)
      .send(results)
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: "Not Retrieved!"
      })
  }
})

/* Get a post */
router.get(`/user`, async (req, res) => {
  const { id } = req.query

  const results = await postService.getPost(id)

  if (results) {
    res
      .status(200)
      .send(results)
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: "Not Retrieved!"
      })
  }
})

/* Update a post */
router.post(`/update`, async (req, res) => {
  const { id, userid, title, post, postdate } = req.body

  const results = await postService.updatePost(id, userid, title, post, postdate)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: "Successfully Updated!"
      })
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: "Not Updated!"
      })
  }
})

/* Delee a post */
router.get(`/delete`, async (req, res) => {
  const { id } = req.query

  const results = await postService.deletePost(id)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: "Successfully Deleted!"
      })
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: "Not Deleted!"
      })
  }
})
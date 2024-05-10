const express = require('express')
const router = express.Router()

const createService = require('../services/UserServices/createService')
const retrieveService = require('../services/UserServices/retrieveService')
const retrieveuserService = require('../services/UserServices/getAllService')
const updateService = require('../services/UserServices/updateService')
const deleteService = require('../services/UserServices/deleteService')
const loginService = require('../services/UserServices/loginService')

/* Create a user */
router.post(`/create`, async (req, res) => {
  const { username, password } = req.body

  const results = await createService(username, password)

  if (results) {
    res
      .status(200)
      .send({
        status: results,
        message: "Successfully Created!"
      })
  } else {
    res
      .status(500)
      .send({
        status: results,
        message: "Not Created!"
      })
  }
})

/* Get all user */
router.get(`/all`, async (req, res) => {
  const fields = ['id', 'username', 'password']

  const results = await retrieveService(fields)

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

/* Get a user */
router.get(`/user`, async (req, res) => {
  const { id } = req.query

  const results = await retrieveuserService(id)

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

/* Update a user */
router.post(`/update`, async (req, res) => {
  const { id, username, password } = req.body

  const results = await updateService(id, username, password)

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

/* Delee a user */
router.get(`/delete`, async (req, res) => {
  const { id } = req.query

  const results = await deleteService(id)

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

/* Login a user */
router.post(`/login`, async (req, res) => {
    const { username, password } = req.body
  
    const results = await loginService(username, password)
  
    if (results) {
      res
        .status(200)
        .send(results)
    } else {
      res
        .status(500)
        .send({
          status: results,
          message: "Invalid User!"
        })
    }
})

module.exports = router
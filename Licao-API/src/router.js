const express = require('express')
const { PrismaClient } = require('@prisma/client')
const userController = require('./controller/userController')


const router = express.Router()


router.post('/User', async (req, res) => {
    userController.create(req, res)
})

router.get('/User', async (req, res) => {
    userController.findMany(req, res)
})

router.get('/User/:id', async (req, res) => {
    userController.findUnique(req, res)
})

router.put('/User/:id', async (req, res) => {
    userController.update(req, res)
})

router.delete('/User/:id', async (req, res) => {
    userController.delete(req, res)
})

module.exports = router
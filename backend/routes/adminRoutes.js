const express = require('express')
const adminControllers = require('../controllers/adminControllers')
const authentication = require('../middleware/authentication')
const adminRoutes= express.Router()


adminRoutes.post('/register',adminControllers.register)
adminRoutes.post('/login',adminControllers.login)
adminRoutes.get('/getoneadmin/:adminId',authentication,adminControllers.getOneAdmin)
module.exports = adminRoutes

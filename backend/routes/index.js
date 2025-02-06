const express = require('express')

const adminRoutes = require('./adminRoutes')
const menuItemsRoutes = require('./menuItemsRoute')
const menuRoutes = require('./menuRoutes')


const routes = express()


routes.use('/admin',adminRoutes)
routes.use('/menuItem',menuItemsRoutes)
routes.use('/menu',menuRoutes)








module.exports = routes
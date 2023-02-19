//  Moduels and routes
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
//const cors = require('cors')

// middleware
app.set('view engine', 'jsx')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(methodOveride('_method'))

// controllers and routes
const placesRoutes = require('./controllers/places.js')
app.use('/places', placesRoutes)

// Mongo Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// Configue Port and listen
const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`Listening on Port ${PORT}`))

module.exports = app;
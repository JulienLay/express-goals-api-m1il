// Import des modules
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

// Couleur dans la console
const colors = require('colors')

// Connexion à MongoDB
const connectDB = require('./config/db')
connectDB()

// Initialisation d'Express
const app = express()

// Accepter les données envoyées par formulaire
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/articles', require('./routes/articleRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/comments', require('./routes/commentRoutes'))
app.use('/api/tags', require('./routes/tagRoutes'))

app.listen(port, () => {
    console.log(`Server started on ${port}`)
})
require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')
const db = require('./db.json')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/home.html'))
})

app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/home.html'))
})

app.get('/menu.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/menu.html'))
})

app.get('/search.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/search.html'))
})

app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/home.js'))
})

app.get('/menu.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/menu.js'))
})

app.get('/search.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/search.js'))
})

app.use(express.json())

//app.get from api goes here
app.post('/deck', (req, res) => {
    db.push(req.body)

    res.sendStatus(200)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
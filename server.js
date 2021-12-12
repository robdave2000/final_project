const express = require('express')
const path = require('path')
const app = express()

//app.use(express.static('public'))

//Rollbar goes here

app.get('/home.html', (req, res) => {
    //rollbar.info('Someone visited our site')

    res.sendFile(path.join(__dirname, 'public/home.html'))
})

app.get('/menu.html', (req, res) => {
    //rollbar.info('Someone visited our site')

    res.sendFile(path.join(__dirname, 'public/menu.html'))
})

app.get('/search.html', (req, res) => {
    //rollbar.info('Someone visited our site')

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

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
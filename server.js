const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))

//Rollbar goes here

app.get('/', (req, res) => {
    //rollbar.info('Someone visited our site')

    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.js'))
})

app.use(express.json())

//app.get from api goes here

const port = process.env.Port || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
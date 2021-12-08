const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))

//Rollbar goes here

//app.get filepaths go here

//app.get from api goes here

const port = process.env.Port || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
const { table } = require('console')
const express = require('express')
const { styleText } = require('util')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/home.html')
  })

app.get('/home', function (req, res) {
  res.sendFile(__dirname + '/public/home.html')
})

app.get('/about',(req, res) =>{
    res.sendFile(__dirname + '/public/about.html')
})

app.get('/contact',(req, res) =>{
    res.sendFile(__dirname + '/public/contact.html')
})

app.get('/marksheet',(req, res) =>{
    res.sendFile(__dirname + '/public/marksheet.html')
})

app.get('/process',(req, res) =>{
    var n1 = req.query.eng
    var n2 = req.query.math
    var c = parseInt(n1) + parseInt(n2)
    var avg = c/2
    if(avg<36){
        res.send("Fail")
    }
})

app.listen(port, ()=>{
    console.log('Server is running on port 3000')
})
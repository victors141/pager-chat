const express = require('express')
var io = require('socket.io-client')
const cors = require('cors')

const PORT = process.env.PORT || 3000
const ALL_MESSAGES = []

const socket = io('wss://pager-hiring.herokuapp.com/?username=backend', {
  transports: ['websocket'],
  secure: true,
  reconnect: true,
})

// Add a connect listener
socket.on('connect', function (socket) {
  console.log('Connected!')
})

socket.on('message', message => ALL_MESSAGES.push(message))

const app = express()
app.use(cors())

app.get('/', function (req, res) {
  res.json({status: 'ok'})
})

app.get('/getMessages', function (req, res) {
  res.json({messages: ALL_MESSAGES})
})

app.listen(PORT, function (err) {
  if (err) console.log(err)
  console.log('Server listening on PORT', PORT)
})

const cors = require('cors')
const express = require('express')
const events = require('events')
const PORT = 5000

const emitter = new events.EventEmitter()

const app = express()

app.use(cors())

app.get('', () => {})

app.post('', (req, res) => {
    const message = req.body

    res.status(200)
})

app.listen(PORT, () => console.log("Yes"))
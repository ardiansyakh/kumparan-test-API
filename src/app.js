const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const dotenv = require('dotenv')
const indexRoute = require('./routes')
const http = require('http')
if(process.env.NODE_ENV !== 'prod') {
    dotenv.config()
}

const Db = require('./database/config')
const error = require("./helper/error")
Db.initConnection()
const app = express()
const port = process.env.PORT || 3000
app.use(cors({
    origin: '*'
}))
app.use(bodyParser.json())
app.use('/', indexRoute)
app.use(error)
const server = http.createServer(app)
server.listen(port, ()=> {
    console.log('running on port: ', port)
})

module.exports = app

const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const api = require('./routes/api.routes')

dotenv.config();
const PORT = process.env.PORT
const databaseConnect = require('./db/config')
databaseConnect()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/', api)

app.listen(PORT, () => {
    try {
        console.log(`Server connected on port ${ PORT }`)
    } catch(error){
        console.log(`Error in server, Error: `, error)
    }
})

module.exports = app
require('dotenv').config()

const express = require('express')
const { name, version } = require('./package')
//const routes = require('./routes')
const cors = require('cors')
const { database } = require('my-project-data')

const { env: { PORT, DB_URL, DB_URL_TEST } } = process

database.connect(DB_URL_TEST, { useNewUrlParser: true })
    .then(() => {
        const app = express()

        app.use(cors())
        //app.use('/api', routes)

        app.listen(PORT, () => console.log(`${name} ${version} up and running on port ${PORT}`))
    })

process.on('SIGINT', () => {
    console.log(`\n${name} ${version} shutting down, disconnecting from db...`)

    database.disconnect()

    process.exit(0)
})

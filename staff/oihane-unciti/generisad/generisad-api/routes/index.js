const { Router } = require('express')
const bodyParser = require('body-parser')
const tokenMiddleware = require('../helpers/token-middleware')

const registerUser = require('./register-user')
const authenticateUser = require('./authenticate-user')
const retrieveUser = require('./retrieve-user')

const registerAd = require('./register-ad')



const router = Router()

const jsonBodyParser = bodyParser.json()

router.post('/users', jsonBodyParser, registerUser)

router.post('/auth', jsonBodyParser, authenticateUser)

router.get('/users/:id', [tokenMiddleware, jsonBodyParser], retrieveUser)

router.post('/ads', jsonBodyParser, registerAd)



// router.patch('/users/:id', [tokenMiddleware, jsonBodyParser], updateUser)

// router.delete('/users/:id', [tokenMiddleware, jsonBodyParser], unregisterUser)

module.exports = router
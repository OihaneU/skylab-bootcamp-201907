const { Router } = require('express')
const bodyParser = require('body-parser')
const tokenMiddleware = require('../helpers/token-middleware')

const registerUser = require('./register-user')
const authenticateUser = require('./authenticate-user')
const retrieveUser = require('./retrieve-user')
const retrieveUserAd = require('./retrieve-user-ad')
const retrieveFav = require('./retrieve-fav')
const toggleUserFav = require('./toggle-user-fav')

const registerAd = require('./register-ad')
const retrieveAllAd = require('./retrieve-all-ad')
const retrieveAd = require('./retrieve-ad')
const deleteAd = require('./delete-ad')
const searchAd = require('./search-ad')

const sendMessage = require('./send-message')
const responseEmail = require("./response-email")
const retrieveUserMessage =  require("./retrieve-user-message")


//USER
const router = Router()

const jsonBodyParser = bodyParser.json()
router.post('/users', jsonBodyParser, registerUser)
router.post('/auth', jsonBodyParser, authenticateUser)
router.get('/users', [tokenMiddleware, jsonBodyParser], retrieveUser)
router.get('/ads/owner', [tokenMiddleware, jsonBodyParser], retrieveUserAd)

router.get('/users/favorites', [tokenMiddleware, jsonBodyParser], retrieveFav)
router.post('/ads/:id/favorite', [tokenMiddleware, jsonBodyParser], toggleUserFav)




//AD
router.post('/users/ads', [tokenMiddleware, jsonBodyParser], registerAd)
router.get('/ads',  jsonBodyParser, retrieveAllAd)
router.get('/ads/search',  jsonBodyParser, searchAd)
router.get('/ads/:id', jsonBodyParser, retrieveAd)
router.delete('/ads/:id', [tokenMiddleware, jsonBodyParser], deleteAd)

//MAIl
router.post('/users/ads/:id/message', [tokenMiddleware, jsonBodyParser], sendMessage)
router.post('/users/message/:id', [tokenMiddleware, jsonBodyParser], responseEmail)
router.get('/users/message', [tokenMiddleware, jsonBodyParser], retrieveUserMessage)






// router.patch('/users/:id', [tokenMiddleware, jsonBodyParser], updateUser)

// router.delete('/users/:id', [tokenMiddleware, jsonBodyParser], unregisterUser)

module.exports = router
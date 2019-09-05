const { Router } = require('express')
const bodyParser = require('body-parser')
const tokenMiddleware = require('../helpers/token-middleware')

const registerUser = require('./register-user')
const authenticateUser = require('./authenticate-user')
const retrieveUser = require('./retrieve-user')
const retrieveUserAd = require('./retrieve-user-ad')
const retrieveUserFav = require('./retrieve-user-fav')
const toggleUserFav = require('./toggle-user-fav')

const registerAd = require('./register-ad')
const retrieveAllAd = require('./retrieve-all-ad')
const retrieveAd = require('./retrieve-ad')
const deleteAd = require('./delete-ad')
const searchAd = require('./search-ad')


//USER
const router = Router()

const jsonBodyParser = bodyParser.json()
router.post('/users', jsonBodyParser, registerUser)
router.post('/auth', jsonBodyParser, authenticateUser)
router.get('/users', [tokenMiddleware, jsonBodyParser], retrieveUser)
// router.get('/users/:id/ads', [tokenMiddleware, jsonBodyParser], retrieveUserAd)
// router.get('/users/:id/favorites/user', [tokenMiddleware, jsonBodyParser], retrieveUserFav)
// router.get('/users/:id/favorites', [tokenMiddleware, jsonBodyParser], toggleUserFav)






//AD
router.post('/users/ads', [tokenMiddleware, jsonBodyParser], registerAd)
// router.get('/ads',  jsonBodyParser, retrieveAllAd)
// router.get('/ads/q',  jsonBodyParser, searchAd)
// router.get('/ads/:id',  jsonBodyParser, retrieveAd)
// router.delete('/ad/:id', [tokenMiddleware, jsonBodyParser], deleteAd)








// router.patch('/users/:id', [tokenMiddleware, jsonBodyParser], updateUser)

// router.delete('/users/:id', [tokenMiddleware, jsonBodyParser], unregisterUser)

module.exports = router
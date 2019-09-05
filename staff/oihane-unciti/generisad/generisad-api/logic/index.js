module.exports = {
    registerUser: require('./register-user'),
    authenticateUser: require('./authenticate-user'),
    retrieveUser: require('./retrieve-user'),
    registerAd: require('./register-ad'),
    retrieveAllAd: require('./retrieve-all-ad'),
    deleteAd: require('./delete-ad'),
    searchAdQuery: require('./search-ad-query'), 
    retrieveUserAd: require('./retrieve-user-ad'),
    //retrieveAllAd: require('./retrieve-all-ad'),
    toggleFavUser: require("./toggle-fav-user"),
    retrieveFav: require("./retrieve-fav")


    // updateUser: require('./update-user'),
    // unregisterUser: require('./unregister-user'),
    // registerCard: require('./register-card'),
    // registerVehicle: require('./register-vehicle'),
    // registerProperty: require('./register-property')
}
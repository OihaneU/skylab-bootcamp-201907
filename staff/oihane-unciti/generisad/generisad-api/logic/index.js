module.exports = {
    registerUser: require('./register-user'),
    authenticateUser: require('./authenticate-user'),
    retrieveUser: require('./retrieve-user'),
    registerAd: require('./register-ad'),
    retrieveAllAd: require('./retrieve-all-ad'),
    deleteAd: require('./delete-ad'),
    searchAd: require('./search-ad'), 
    retrieveUserAd: require('./retrieve-user-ad'),
    //retrieveAllAd: require('./retrieve-all-ad'),
    toggleUserFav: require("./toggle-user-fav"),
    retrieveFav: require("./retrieve-fav")


    // updateUser: require('./update-user'),
    // unregisterUser: require('./unregister-user'),
    // registerCard: require('./register-card'),
    // registerVehicle: require('./register-vehicle'),
    // registerProperty: require('./register-property')
}
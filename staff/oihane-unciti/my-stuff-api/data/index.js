const mongoose = require('mongoose')
const { user, vehicle, property, card } = require('./schemas')

module.exports = {
    User: mongoose.model('user', user),
    Vehicle: mongoose.model("vehicle", vehicle),
    //Property: mongoose.model("property", property),
    //Card: mongoose.model("card", card)
}
const { Vehicle } = require('../../data')

/**
 * Registers a user.
 * 
 * @param {string} brand 
 * @param {string} model 
 * @param {Date} year 
 * @param {string} type
 * @param {string} color 
 * @param {boolean} electric 
 * @param {string} owner
 * @param {string} license
 * 
 * 
 * @returns {Promise}
 */
module.exports = function (brand, model,year, type, color, electric, owner) {
    // TODO validate fields

    return Vehicle.findOne({ vehicle })
        .then(user => {
            if (user) throw new Error(`user with e-mail ${email} already exists`)

            return User.create({ name, surname, email, password })
        })
        .then(() => { })
}
const { models: { User } } = require('../register-ad/node_modules/generisad-data')
const { validate } = require('../register-ad/node_modules/generisad-utils')

/**
 * 
 * @param {*} name 
 * @param {*} surname 
 * @param {*} email 
 * @param {*} password 
 * @param {*} favorites 
 * 
 * @returns {Promise}
 */

module.exports = function(name, surname, email, password, favorites) {

    validate.string(name, 'name')
    validate.string(surname, 'surname')
    validate.string(email, 'email')
    validate.email(email, 'email')
    validate.string(password, 'password')
    validate.array(favorites, "favorites")

    return (async () => {
        const user = await User.findOne({ email })
            if (user) throw new Error(`user with e-mail ${email} already exists`)
            else await User.create({name, surname, email, password, favorites})
    })()    
}
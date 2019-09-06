const { models: { User } } = require('generisad-data')
const { validate } = require('generisad-utils')

/**
 * 
 * @param {String} adId
 *
 * 
 * @returns {Promise}
 */

module.exports = function(userId) {
    validate.string(userId, "userId")

    return (async () => { 

        const result = await User.findById(userId)
        if (!result) throw Error(`User with id ${userId} does not exist.`)
            return result.favorites

    })()
}
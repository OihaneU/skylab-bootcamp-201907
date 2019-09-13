const { models: { User } } = require('generisad-data')
const { validate } = require('generisad-utils')

/**
 * 
 * @param {String} userId
 *
 * 
 * @returns {Promise}
 */

module.exports = function(userId) {
    validate.string(userId, "userId")

    return (async () => { 

        if (!(await User.findById(userId))) throw Error(`User with id ${userId} does not exist.`)
        const res = await User.findById(userId).populate('favorites').lean()

        return res

    
    })()
}
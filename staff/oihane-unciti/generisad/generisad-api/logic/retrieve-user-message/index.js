const { models: { User,Mail } } = require('generisad-data')
const { validate } = require('generisad-utils')

/**
 * 
 * @param {String} userId
 *
 * 
 * @returns {Promise}
 */

module.exports = function(userId) {

    validate.string(userId ,"userId")

    return (async () => { 

        const user = await User.findById(userId)
        if (!user) throw Error(`user with id ${userId} not found`)

        const mail = await Mail.find({$or:[{receiver: userId},{sender:userId}]})
            if (!mail) throw Error(`There are not message`)
            else {
                await Mail.updateMany({receiver: userId}, {$set: { "read" : "true"}} )
                return mail
            }
    })()
}
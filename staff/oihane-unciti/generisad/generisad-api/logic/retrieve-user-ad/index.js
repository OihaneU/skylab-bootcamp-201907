const { models: { Advertisement } } = require('generisad-data')
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

        const ads = await Advertisement.find({owner :userId},{ __v: 0 }).lean();
            if (!ads) throw Error(`User does not have an ad with ad id`)
            else {
                return ads
            }
    })()
}
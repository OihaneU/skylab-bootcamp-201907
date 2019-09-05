const { models: { Advertisement } } = require('generisad-data')
const { validate } = require('generisad-utils')

/**
 * 
 * @param {String} adId
 *
 * 
 * @returns {Promise}
 */

module.exports = function(userId) {
    validate.string(userId)

    return (async () => { 
        const ads = await Advertisement.find({owner :userId},{ __v: 0 }).lean();
            if (!ads) throw Error(`Advertisement with id ${adId} does not exist.`)
            else {
                return ads
            }
    })()
}
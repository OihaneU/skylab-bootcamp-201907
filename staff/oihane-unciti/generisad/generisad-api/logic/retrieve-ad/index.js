const { models: { Advertisement } } = require('generisad-data')
const { validate } = require('generisad-utils')

/**
 * 
 * @param {String} adId
 *
 * 
 * @returns {Promise}
 */

module.exports = function(adId) {
    validate.string(adId)

    return (async () => { debugger
        const ad = await Advertisement.findById(adId)
            if (!ad) throw Error(`Advertisement with id ${adId} does not exist.`)
            else {
                return ad
            }
    })()
}
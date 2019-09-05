const { models: { Advertisement } } = require('generisad-data')
const { validate } = require('generisad-utils')

/**
 * 
 * @param {String} adId
 * @param {String} id 
 *
 * 
 * @returns {Promise}
 */

module.exports = function(adId, userId) {

    validate.string(adId, 'Advertisement id')
    validate.string(userId, 'user id')

    return (async () => {debugger
        const ad = await Advertisement.findById(adId)
             if(!ad) throw new Error(`advertisement with id ${adId} does not exist`)
            else{
                if(ad.owner.toString() !== userId) throw new Error (`user with id ${userId} is not owner of advertisement with id ${adId}`)
                else {
                    const res= await Advertisement.findByIdAndDelete( adId )
                    return res
                }

                
            }
    })()
}
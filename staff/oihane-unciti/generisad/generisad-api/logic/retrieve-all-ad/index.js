const { models: { Advertisement } } = require('generisad-data')
const { validate } = require('generisad-utils')

/**
 * 
 * @param 
 *
 * 
 * @returns {Promise}
 */

 //idowner
 module.exports = function() {
    
    return (async () => {
        const ads = await Advertisement.find( {},{ __v: 0 }).sort({_id:1}).lean() 
        if (!ads) throw Error(`there are not ads`)   
        
        return ads
    })()
}
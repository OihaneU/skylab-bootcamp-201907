const { models: { Advertisement } } = require('generisad-data')
const { validate } = require('generisad-utils')

/**
 * 
 * @param {String} query
 * 
 * @returns {Promise}
*/

module.exports = function(query) {debugger
    
    validate.string(query, 'query')

    return (async () => {
        const ads = await Advertisement.find( {"title": { "$regex": `${query}`, "$options": "i" }},{ __v: 0 }).sort({_id:1}).lean() 
        if (!ads) throw Error(`there are not ads with query ${query}`)   
        //Return empty array in client Site
        
        return ads
    })()
}
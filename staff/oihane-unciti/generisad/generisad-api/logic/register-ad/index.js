const { models: { Advertisement, User } } = require('generisad-data')
const { validate } = require('generisad-utils')

/**
 * 
 * @param {String} image
 * @param {String} title 
 * @param {String} description 
 * @param {String} location 
 * 
 * @returns {Promise}
 */

module.exports = function(image, title, description, price, location, date , userId) {

    validate.string(image, 'image')
    validate.string(title, 'title')
    validate.string(description, 'description') 
    validate.string(price, 'price') 
    validate.string(location, 'location')
    //validate
    

    return (async () => {
        const user = await User.findById(userId)
        if(!user) throw Error
       const ad = await Advertisement.create({image, title, description, price, location, date , userId})
    
       return ad.id
    })()    
}
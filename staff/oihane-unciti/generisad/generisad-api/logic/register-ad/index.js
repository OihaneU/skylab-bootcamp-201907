const { models: { Advertisement, User } } = require('generisad-data')
const { validate } = require('generisad-utils')

/**
 * 
 * @param {String} image
 * @param {String} title 
 * @param {String} description 
 * @param {String} location 
 * @param {String} userId 
 * 
 * @returns {Promise}
 */

module.exports = function(image, title, description, price, location, userId) {

    validate.string(image, 'image')
    validate.string(title, 'title')
    validate.string(description, 'description') 
    validate.string(price, 'price') 
    validate.string(location, 'location')
    
    validate.string(userId, "userId")
    
    const date = new Date()
    return (async () => {
        const user = await User.findById(userId)
        if(!user) throw Error(`user with id ${userId} not found`)
       const ad = await Advertisement.create({image, title, description, price, location, date , owner: userId})
       return ad.id
    })()    
}
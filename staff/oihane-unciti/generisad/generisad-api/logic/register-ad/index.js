const { models: { Advertisement } } = require('generisad-data')
const { validate } = require('generisad-utils')

/**
 * 
 * @param {String} img
 * @param {String} title 
 * @param {String} description 
 * @param {String} location 
 * 
 * @returns {Promise}
 */

module.exports = function(img, title, description, price, location, date ) {

    validate.string(img, 'img')
    validate.string(title, 'title')
    validate.string(description, 'description') 
    validate.string(price, 'price') 
    validate.string(location, 'location')
    //validate
    

    return (async () => {
       await Advertisement.create({img, title, description, price, location, date})
    })()    
}
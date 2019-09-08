const { models: { Advertisement, User, Mail } } = require('generisad-data')
const { validate } = require('generisad-utils')

/**
 * 
 * @param {String} userId
 * @param {String} adId 
 * @param {String} title 
 * @param {String} body 
 * 
 * @returns {Promise}
 */

 module.exports = function(userId, adId,title, body ) {

    validate.string(userId, "userId")
    validate.string(adId, "adId")
    validate.string(title, 'title')
    validate.string(body, 'body')
    
    
    
    
    const date = new Date()

    return (async () => { 
        const user = await User.findById(userId)
            if(!user) throw Error(`user with id ${userId} not found`)

        const ad = await Advertisement.findById(adId)
            if(!ad) throw Error(`ad with id ${adId} not found`)
            else receiverId = ad.owner
            

       const mail = await Mail.create({sender: userId, receiver: receiverId, title, body, ad: adId, date })
       
       return mail.id
    })()    
}

// //schema Mail add destinatario y titulo
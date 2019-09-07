// const { models: { Advertisement, User, Conversation, Mail } } = require('generisad-data')
// const { validate } = require('generisad-utils')

// /**
//  * 
//  * @param {String} image
//  * @param {String} title 
//  * @param {String} description 
//  * @param {String} location 
//  * 
//  * @returns {Promise}
//  */

// module.exports = function(title, body, author, userId, adId ) {

//     validate.string(title, 'title')
//     validate.string(body, 'body')
//     validate.string(author, 'author')
    
//     validate.string(userId, "userId")
//     validate.string(adId, "adId")
    
//     const date = new Date()

//     return (async () => {
//         const user = await Advertisement.findById(userId)
//         if(!user) throw Error(`ad with id ${userId} not found`)

//         const ad = await Advertisement.findById(adId)
//         if(!ad) throw Error(`ad with id ${adId} not found`)

//        const mail = await Mail.create({date, title, body, author: userId, receiver: owner })
//        // ad._id = ad.id
//        //return ad
//        return mail.id
//     })()    
// }

// //schema Mail add destinatario y titulo
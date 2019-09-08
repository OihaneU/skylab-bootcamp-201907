const { models: { User, Mail } } = require('generisad-data')
const { validate } = require('generisad-utils')

// /**
//  * 
//  * @param {String} image
//  * @param {String} title 
//  * @param {String} description 
//  * @param {String} location 
//  * 
//  * @returns {Promise}
//  */

 module.exports = function(userId, mailId, title, body ) {

    validate.string(userId, "userId")
    validate.string(mailId, "mailI")
    validate.string(title, 'title')
    validate.string(body, 'body')
    
    
    
    
    const date = new Date()

    return (async () => { debugger
        const user = await User.findById(userId)
            if(!user) throw Error(`userId with id ${userId} not found`)

        const mail = await Mail.findById(mailId)
            if(!mail) throw Error(`mailId with id ${mailId} not found`)
            else {
                receiverId= mail.sender
                advertisement = mail.advertisement
            }
               

       const conversation = await Mail.create({sender: userId, receiver: receiverId, title, body, advertisement, date })
       
       return conversation.id
    })()    
}

// //schema Mail add destinatario y titulo
const { models: { User } } = require('../register-ad/node_modules/generisad-data')
const { validate } = require('../register-ad/node_modules/generisad-utils')

 /**
 * 
 * @param {*} email 
 * @param {*} password 
 * 
 * @returns {Promise}
*/

module.exports = function(email, password) {
   
    validate.string(email, 'email')
    validate.email(email, 'email')
    validate.string(password, 'password')
    
    return (async () => {
        const user = await User.findOne({ email, password })
            if (!user) throw new Error('Wrong credentials.')
            else return user.id
    })()
}
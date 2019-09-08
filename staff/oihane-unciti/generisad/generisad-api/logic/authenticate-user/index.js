const { models: { User } } = require('generisad-data')
const bcrypt = require('bcryptjs')
const { validate } = require('generisad-utils')

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

        const user = await User.findOne({ email })

        if(!user) throw new Error (`user with email ${email} does not exist`)

        const match = await bcrypt.compare(password , user.password)

        if(!match) throw new Error ('wrong credentials')
        
        return user.id
    })()
}
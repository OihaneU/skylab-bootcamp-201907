const { models: { User, Merchant } } = require('generisad-data')
const { validate } = require('generisad-utils')
const bcrypt = require('bcryptjs')

/**
 * 
 * @param {*} name 
 * @param {*} surname 
 * @param {*} email 
 * @param {*} password 
 * @param {*} favorites 
 * 
 * @returns {Promise}
 */

module.exports = function(name, surname, email, password, domain) {
    
    validate.string(name, 'name')
    validate.string(surname, 'surname')
    validate.string(email, 'email')
    validate.email(email, 'email')
    validate.string(password, 'password')
    validate.string(domain, "domain")

    return(async ()=>{

        const user = await User.findOne({ email })
         
        if(user) throw new Error (`user with e-mail ${email} already exists`)

        const hash = await bcrypt.hash(password,10)

        const merchant = await Merchant.findOne({ domain })
        let merchant_id = merchant._id
        
        await User.create({ name , surname ,  email , password : hash , merchant_owner : merchant_id})
        return { }
     })()

}
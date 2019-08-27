const { User, Vehicle } = require('../../data')

/**
 * Registers a user.
 * 
 * @param {string} brand 
 * @param {string} model 
 * @param {Date} year 
 * @param {string} type
 * @param {string} color 
 * @param {boolean} electric 
 * @param {string} owner
 * @param {string} license
 * 
 * 
 * @returns {Promise}
 */
module.exports = function (brand, model,year, type, color, electric, licence, owner) {
    // TODO validate fields

    return Vehicle.findOne({ licence })
        .then(vehicle => {
            
            debugger
            if (vehicle) throw new Error(`user with licence ${licence} already exists`)
           
            else{
                const vehicle = new Property({ brand, model,year, type, color, electric, licence })
                vehicle.owner.push(id)
                return vehicle.save()
            }
            
        })
        .then(() => { })
}
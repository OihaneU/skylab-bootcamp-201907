const { models: { User, Advertisement } } = require('generisad-data')
const { validate } = require('generisad-utils')

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

module.exports = function(favorites, adId ) {

    validate.array(favorites, 'favorites')
    validate.string(adId, 'adId')
   

    return (async () => {
        const ad = await Advertisement.findById(adId).lean()

        if (!ad) throw new Error(`ad with id ${adId} not found`)

        

        const fav = User.find({'adId': { $in: favorites }})

        if (!fav) user.favorites.push(adId)
        //if (!fav) user.favorites.push(ObjectId("adId"))
        user.save()
        //else favorites.pull({adId})

        return favorites
    })()
}
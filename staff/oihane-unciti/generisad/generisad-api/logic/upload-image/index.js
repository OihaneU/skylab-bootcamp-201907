require('dotenv').config()

const { models: { Advertisement } } = require('generisad-data')
const { models: { User } } = require('generisad-data')

const streamifier = require('streamifier')
const cloudinary = require('cloudinary')

const { CLOUDINARY_API_KEY, CLOUDINARY_NAME, CLOUDINARY_SECRET_KEY } = require('../config')

/**
* Update user information.
* 
* @param {String} adId 
* @param {Buffer} buffer 
* 
* @throws {TypeError} - if userId is not a string or buffer is not a buffer.
* @throws {Error} - if any param is empty, user is not found or image could not be uploaded.
*
* @returns {Object} - user.  
*/

module.exports = function (adId, buffer) {

    validate.string(adId, 'ad id')
    validate.object(buffer, 'buffer');

    return (async () => {
        const ad = await Advertisement.findById(adId)
        if (!ad) throw new Error(`user with userId ${adId} not found`)

        cloudinary.config({
            cloud_name: CLOUDINARY_NAME,
            api_key: CLOUDINARY_API_KEY,
            api_secret: CLOUDINARY_SECRET_KEY
            })
        
        const image = await new Promise((resolve, reject) => {

            const upload_stream = cloudinary.uploader.upload_stream((err,image) => {

                if (err) return reject (`Image could not be uploaded: ${err}`)

                resolve(image)
            })
            streamifier.createReadStream(buffer).pipe(upload_stream)
        })

        let _ad = await User.findByIdAndUpdate(adId, { image: image.secure_url }, { new: true, runValidators: true }).select('-__v -password').lean()
        
        _ad.id = ad._id.toString()
        delete _ad._id

        return _ad
    })()
}
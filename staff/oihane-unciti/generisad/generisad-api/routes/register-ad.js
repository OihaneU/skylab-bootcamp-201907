const logic = require('../logic')

module.exports = (req, res) => {

    const { userId,  body: { image, title, description, price, location } } = req
    try {
        logic.registerAd(image, title, description, price, location, userId )
            .then(adId => res.status(201).json({ adId }))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
}
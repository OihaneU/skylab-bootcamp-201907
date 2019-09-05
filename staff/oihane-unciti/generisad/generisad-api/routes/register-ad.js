const logic = require('../logic')

module.exports = (req, res) => {
    debugger
    const { userId,  body: { image, title, description, price, location } } = req
    try {
        logic.registerAd(image, title, description, price, location, userId )
            .then(() => res.status(201).json({ message: 'ad correctly registered' }))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
}
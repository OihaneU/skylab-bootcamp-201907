const logic = require('../logic')

module.exports = function (req, res) {
    
    const { body: { image, title, description, price, location, date } } = req
    try {
        logic.registerUser(image, title, description, price, location, date )
            .then(() => res.status(201).json({ message: 'ad correctly registered' }))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
}
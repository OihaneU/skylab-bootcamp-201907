const logic = require('../logic')

module.exports = function (req, res) {
    const { body: { brand, model,year, type, color, electric, licence, owner } } = req

    try {
        logic.registerVehicle(brand, model,year, type, color, electric, licence, owner)
            .then(() => res.status(201).json({ message: 'user correctly registered' }))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
}
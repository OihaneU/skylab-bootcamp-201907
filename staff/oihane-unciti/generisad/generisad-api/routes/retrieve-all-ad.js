const logic = require('../logic')

module.exports = (req, res) => {
    const {  } = req

    try {
        logic.retrieveAllAd()
            .then(ad => res.json({ message: 'ad retrieved correctly', ad }))
            .catch(({ message }) => res.status(404).json({ error: message }))
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}
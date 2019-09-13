const logic = require('../logic')

module.exports = (req, res) => {
    const { userId } = req
debugger
    try {
        logic.retrieveFav(userId)
            .then(ad => res.json({ message: 'ad retrieved correctly fav', ad }))
            .catch(({ message }) => res.status(404).json({ error: message }))
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}
const logic = require('../logic')

module.exports = function (req, res) {
    const { userId, body: { adId } } = req

    try {
        logic.deleteAd(adId, userId)
            .then(() => res.json({ message: 'ad correctly unregistered' }))
            .catch(({ message }) => res.status(404).json({ error: message }))
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}
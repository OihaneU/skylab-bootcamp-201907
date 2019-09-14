const logic = require('../logic')

module.exports = (req, res) => { 
    const { userId }= req

    try {
        logic.retrieveUserMessage(userId)
            .then(mail => res.json({ message: 'mail retrieved correctly', mail }))
            .catch(({ message }) => res.status(404).json({ error: message }))
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}
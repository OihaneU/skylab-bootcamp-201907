const logic = require('../logic')

module.exports = (req, res) => {

    const { userId, params:{id}, body: { title, body } } = req
    try { 
        logic.responseEmail(userId, id, title, body )
            .then(() => res.status(201).json({ message: 'message correctly sent' }))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
}
const { Schema, SchemaTypes: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type:Date,
        require: true
    },

    owner: [{ type: ObjectId, ref: 'User' }] 
})
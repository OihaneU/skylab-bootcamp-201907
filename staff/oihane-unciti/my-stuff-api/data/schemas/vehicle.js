const mongoose = require('mongoose')


const { Schema, Schema: { Types: { ObjectId } } } = mongoose

module.exports = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['tourism', 'suv', 'van', 'coupe', 'cabrio', 'roadster', 'truck'],
        default: 'tourism'
    },
    color: {
        type: String,
        required: true
    },
    electric: {
        type: Boolean,
        required: true,
        default: false
    },
    licence:{
        type: String,
        required: true
    },
    owner: { type: ObjectId, ref: 'User' }
})
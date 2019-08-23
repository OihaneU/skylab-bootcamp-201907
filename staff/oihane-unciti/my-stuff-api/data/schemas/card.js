const cardSchema = new Schema({
    number: {
        type: String,
        required: true
    },
    expiry: {
        type: Date,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    }
})
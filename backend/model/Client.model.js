const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    birthdate: {
        type: Date,
        default: Date.now
    },
    address: {
        type: String,
        required: true,
        max: 255,
    },
    sin: {
        type: String,
        required: true,
        max: 1024,
    },
})

module.exports = mongoose.model('Client', clientSchema);
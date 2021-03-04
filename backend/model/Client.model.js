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
    address2: {
        type: String,
        required: false,
        max: 1024,
    },
    city: {
        type: String,
        required: true,
        max: 1024,
    },
    state: {
        type: String,
        required: true,
        max: 1024,
    },
    zip: {
        type: String,
        required: true,
        max: 1024,
    },
})

module.exports = mongoose.model('Client', clientSchema);
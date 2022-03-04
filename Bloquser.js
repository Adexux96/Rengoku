const { Schema, model } = require("mongoose");

const BloquserSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    razon: {
        type: String,
        required: true
    }
});

module.exports = model('Bloquser', BloquserSchema);

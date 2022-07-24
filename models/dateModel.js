const mongoose = require('mongoose');

const dateSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    nombreCliente: String,
    fecha: String,
    hora: String,
    tipoCita: String
}, {
    timestamps: true,
});

module.exports = mongoose.model('Date', dateSchema);
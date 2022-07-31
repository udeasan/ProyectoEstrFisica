const mongoose = require('mongoose');

const dateSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    nombreCliente: String,
    fecha: String,
    hora: String,
    tipoCita: String
}, {
    timestamps: true,
});

module.exports = mongoose.model('Date', dateSchema);
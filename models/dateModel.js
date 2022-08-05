const mongoose = require('mongoose');

const dateSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    fecha: String,
    hora: String,
    tipoCita: String,
    businessDate: String
}, {
    timestamps: true,
});

module.exports = mongoose.model('Date', dateSchema);
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    password: String,
    telephone: String,
    address: String,
    isAdmin: Boolean,
    profilePicture: String,
    businessName: String
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
const User = require('../models/userModel.js')
const Date = require('../models/dateModel.js');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const getBusiness = asyncHandler(async (req, res) => {

    const Users = await User.find({isAdmin: true}).select("businessName name profilePicture");
    res.status(200).json(Users);
})

module.exports = {getBusiness};
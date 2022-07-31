const User = require('../models/userModel.js')
const Date = require('../models/dateModel.js');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerUser = asyncHandler(async (req, res) => {
    const { email, name, password, telephone } = req.body;

    if(!email || !password || !name){
        res.status(400);
        throw new Error("Por favor envíe todos los datos");
    }

    const userExists = await User.findOne({email});

    if(userExists) {
        res.status(400);
        throw new Error("El correo electronico ya se encuentra registrado");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({email, name, password: hashedPassword, telephone});

    if(user) {
        res.status(200).json({
            name: user.name,
            token: GenerateToken(user.id)
        })
    }

})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            name: user.name,
            token: GenerateToken(user.id),
        })
    }else {
        res.status(401);
        throw new Error("Contraseña incorrecta");
    }
})

const getUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
})

const GenerateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
}

module.exports = { registerUser, loginUser, getUser};
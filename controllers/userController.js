const { User } = require("../models")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')


exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ["id", 'email', 'role'],
        });
        res.status(200).json({
            success: true,
            message: 'List all Users',
            data: users
        });
    } catch (error) {
        console.log(error)
    }
};

exports.Register = async (req, res) => {
    const { email, password, role } = req.body;

    const emailExist = await User.findOne({
        where: {
            email: email,
        },
    })

    if (emailExist) {
        return failedJson(res, 'This email address already exists')
    }

    const salt = 10;
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        let user = await User.create({
            email: email,
            password: hashPassword,
            role: role,
        })

        user = JSON.parse(JSON.stringify(user))

        return res.status(200).json({
            success: true,
            message: 'Register Successfully'
        })
    } catch (error) {
        console.log(error)
    }

}
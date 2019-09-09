"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const getLogin = (req, res) => {
    const { email, password } = req.body;
    switch (email && password) {
        case email === process.env.EMAIL && password === process.env.PASSWORD:
            return res.status(200).json({
                message: `Welcome back.`
            });
        case email !== process.env.EMAIL && password === process.env.PASSWORD:
            return res.status(400).json({
                country: 23,
                message: `An invalid email was supplied.`
            });
        case email === process.env.EMAIL && password !== process.env.PASSWORD:
            return res.status(400).json({
                message: `An invalid password was supplied.`
            });
        case email !== process.env.EMAIL && password !== process.env.PASSWORD:
            return res.status(400).json({
                message: `Both email & password are invalid.`
            });
        default:
            return res.status(500).json({
                message: 'There was a server error logging you in.'
            });
    }
};
exports.default = getLogin;

const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret } = require("../config/jwt.config");



class UserController {
    async register(req, res) {
        try {
            console.log(req.body)
            const user = new User(req.body)
            await user.save();

            const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
            res.cookie('token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'None'
            })

            res.status(201).json({ msg: 'Successfully created user', user, token });
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    }

    login(req, res) {
        console.log(req.body)
        const { emailAddress } = req.body
        User.findOne({ emailAddress: emailAddress })
            .then(user => {
                console.log(user)
                if (user === null) {
                    res.status(400).json({ msg: "invalid login attempt... user not found" })
                } else {
                    bcrypt.compare(req.body.password, user.password)
                        .then(passwordIsValid => {
                            if (passwordIsValid) {
                                res.cookie("usertoken", jwt.sign({ _id: user._id }, secret), { httpOnly: true })
                                    .json({ msg: "success!" });
                            } else {
                                res.status(400).json({ msg: "invalid login attempt- invalid credentials!" })
                            }
                        })
                        .catch(err => {
                            console.log("password failed")
                            console.log(err)
                            res.status(400).json({ msg: "invalid login attempt", err })
                        })
                }
            })
            .catch(err => res.json(err))
    }

    async findUser(req, res) {
        try {
            console.log('findUser')
            console.log(req.cookies)
            const token = req.cookies.token;
            console.log(token)
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
            console.log(decodedToken)
            const user = await User.findById(decodedToken._id);
            console.log(user)
            if (!user) {
                console.log('user not found')
                return res.status(404).json({ msg: 'User not found' });
            }
            res.json({ user });
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve logged-in user' });
        }
    }

    async getAll(req, res) {
        try {
            const users = await User.find();
            res.json({ users });
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve users' });
        }
    }

    logout(req, res) {
        res.clearCookie('token');
        res.json({ msg: 'Successful Logout!' });
    }
    getLoggedInUser(req, res) {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
        console.log(req.cookies.usertoken)
        User.findById(decodedJWT.payload._id)
            .then(user => res.json({ user }))
            .catch(err => res.json(err))

    }
}

module.exports = new UserController();
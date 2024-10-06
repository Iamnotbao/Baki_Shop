const User = require('../model/userModel.js');
const Role = require('../model/roleModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const saltRounds = 10;

const refresh = [];
const getUser = async (req, res) => {
    await User.find({})
        .then(function (user) {
            res.json(user);
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({ message: 'Server error' });
        });
};

const createUser = async (req, res) => {
    const { username, hash_password } = req.body;
    console.log(username);
    console.log(hash_password);

    try {
        const hashedPassword = await bcrypt.hash(hash_password, saltRounds);
        const user = new User({
            username: username,
            hash_password: hashedPassword,
            user_create_at: new Date(),
            user_create_by: username,
            user_update_at: null,
            user_update_by: null,
            role_id: 1
        });

        await user.save();
        console.log("User added successfully.");
        res.status(201).json({ message: "User added successfully.", user: user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
};
const loginUser = async (req, res) => {
    const { username, hash_password } = req.body;
    // console.log(username);
    // console.log(hash_password);
    const user = await User.findOne({ username: username });
    try {
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(hash_password, user.hash_password);
        console.log(isMatch);
        if (!isMatch) {
            return res.status(404).json({ message: "Invalid Password" });
        }
        const role = await Role.findById(user.role_id);
        const client = { userId: user._id, username: user.username };
        const token = jwt.sign(client, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "60m" });
        const refreshToken = jwt.sign(client, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
      
        refresh.push(refreshToken);

        res.cookie('accessToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 1000
        });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            accessToken: token,
            refreshToken: refreshToken,
            message: "Login successful!",
            role: role,
            user: user
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
};

async function loginAdmin(req, res) {
    const { username, hash_password } = req.body;;
    const admin = await User.findOne({ username });
    const role = await Role.findById(admin.role_id);
    try {
        if (!admin) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(hash_password, admin.hash_password);
        console.log(isMatch);
        if (!isMatch) {
            return res.status(404).json({ message: "Invalid Password" });
        }
        const role = await Role.findById(admin.role_id);
        const client = { userId: admin._id, username: admin.username };
        const token = jwt.sign(client, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "60m" });
        const refreshToken = jwt.sign(client, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
        console.log(role);
        if (role.role_name === "user") {
            return res.status(403).json({
                success: false,
                message: "You don't have permission!!!"
            })
        }
        return res.status(200).json({
            accessToken: token,
            reFreshToken: refreshToken,
            success: true,
            message: "Welcome admin",
            info: admin
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }

}

function authToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token);
    if (token == null) {
        return res.sendStatus(401)
    }
    console.log(process.env.ACCESS_TOKEN_SECRET);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403)
        }
        req.user = user
        next()

    })
}
const refreshAccessToken = async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken || !refresh.includes(refreshToken)) {
        return res.sendStatus(403);
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        const newAccessToken = jwt.sign({ userId: user.userId, username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
        res.json({ accessToken: newAccessToken });
    });
};



module.exports = {
    getUser,
    createUser,
    loginUser,
    authToken,
    refreshAccessToken,
    loginAdmin
};

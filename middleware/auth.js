const jwt = require('jsonwebtoken')
const User = require('../models/User')
exports.isAuthenticated = async (req, res, next) => {

    const { token } = req.cookies;
    if (!token) {
        return res.status(400).json({
            message : "Please login first"
        })
    }

    const {id }= await jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findOne({
        _id : id
    })
    if (req.user != null) {
        
        next();
    } else {
        return res.status(400).json({
          message: "User not found login again",
        });
    }
}

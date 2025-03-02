const jwt = require("jsonwebtoken");
require('dotenv').config();

const getToken = async (email, Code_User) => {
    const token = jwt.sign(
        { identifier: Code_User._id },
        process.env.SECRET_KEY
    );
    return token;
};

const auth = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: "Access denied" });

    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ error: "Invalid token" });
    }
};

module.exports = {
    getToken,
    auth
};
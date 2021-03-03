const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    // check that request header has the 'auth-token'
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied: You need to login');

    try {
        // valid token is verified
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next()
    }
    catch (err) {
        // invalid token
        res.status(400).send('Invalid Token');
    }
}
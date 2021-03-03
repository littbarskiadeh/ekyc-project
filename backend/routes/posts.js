/**

This is an example. We can use this for any protected endpoints on the server end


 **/
const router = require('express').Router();

// to make this route protected
const verify = require('./verifyToken');

// add verify to protect this route: /api/posts/
router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: 'first post',
            content: 'Something you should not be messing with, if you are not logged in'
        }
    })
})

module.exports = router;
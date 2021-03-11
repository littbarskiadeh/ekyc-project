
const router = require('express').Router();

// to make this route protected
const verify = require('./verifyToken');
const Client = require('../model/Client.model');

router.get('/search/:name', verify, (req, res) => {
    let regex = new RegExp(req.params.name, "i"),
        query = { fullName: regex };
    Client.find(query, (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(data);
    });

});

module.exports = router;
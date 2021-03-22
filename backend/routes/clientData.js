/**
This is an example. We can use this for any protected endpoints on the server end
 **/
const router = require('express').Router();

// to make this route protected
const verify = require('./verifyToken');
const Client = require('../model/Client.model');

//'http://localhost:8080/api/addClientData'
router.post('/', verify, async (req, res) => {

    // create user object from request body
    const client = new Client({
        fullName: req.body.fullName,
        birthdate: req.body.birthdate,
        address: req.body.address,
        sin: req.body.sin,
    })

    try {
        // save new client to db
        const savedClient = await client.save();
        console.log(`Client data saved successfully \n${savedClient}`);
        // res.send(clientData)
        res.status(200).json(client);

    } catch (err) {
        res.status(400).send(err)
    }
    /*
    // output validation errors
    // if (error) return res.status(400).send(error.details[0].message);

    */
});

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

// Verify client data with blockchain
// endpoint to call blockchain
//'http://localhost:8080/api/clientData/verify/{sin}' 
router.post('/verify', async (req, res) => {

    let lookupSin = req.body.sin;
    res.status(200).json({ message: "success", lookup: lookupSin })
});

module.exports = router;
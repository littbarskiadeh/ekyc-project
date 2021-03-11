/**

This is an example. We can use this for any protected endpoints on the server end


 **/
const router = require('express').Router();

// to make this route protected
const verify = require('./verifyToken');
const Client = require('../model/Client.model');


// add verify to protect this route: /api/posts/
// router.get('/', verify, (req, res) => {
//     res.json({
//         posts: {
//             title: 'first post',
//             content: 'Something you should not be messing with, if you are not logged in'
//         }
//     })
// })

'http://localhost:8080/api/addClientData'
router.post('/', verify, async (req, res) => {

    // create user object from request body

    const client = new Client({
        fullName: req.body.fullName,
        birthdate: req.body.birthdate,
        address: req.body.address,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
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



module.exports = router;
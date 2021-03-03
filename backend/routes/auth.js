const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation')

router.post('/register', async (req, res) => {

    // validate data before creating user
    const { error } = registerValidation(req.body)

    // output validation errors
    if (error) return res.status(400).send(error.details[0].message);

    // check db if user email exists
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // create user object from request body
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
    });
    try {
        // save new user to db
        const savedUser = await user.save();
        console.log(`new user saved successfully - id: ${user._id}, name: ${user.name}, email: ${user.email}`);

        res.send({ user_id: user.id, email: user.email });
    } catch (err) {
        res.status(400).send(err)
    }
})

// LOGIN
router.post('/login', async (req, res) => {
    // validate data before creating user
    const { error } = loginValidation(req.body)

    // output validation errors
    if (error) return res.status(400).send(error.details[0].message);

    // check if email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email is wrong');

    // Check if password is correct with bcrypt.compare()
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid password')

    // Create and assign JWT token
    const token = jwt.sign({ _id: user._id, _name: user.name }, process.env.TOKEN_SECRET);
    console.log(`token assigned to user successfully - id: ${user._id}, name: ${user.name}`);

    // 'auth-token' is name token
    res.header('auth-token', token).send(token);

    console.log(`User login successful - id: ${user._id}, email: ${user.email}`);
})

module.exports = router;
// Set validation rules for form data
// Validation

const Joi = require('@hapi/joi');

// Register validation

const registerValidation = (data) => {
    const schema = Joi.object({
        //name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    // Validate data before creating user
    return schema.validate(data);
    // if (error) return res.status(400).send(error.details[0].message);
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    // Validate data before creating user
    return schema.validate(data);
    // if (error) return res.status(400).send(error.details[0].message);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;


const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// import routes
const authRoute = require('./routes/auth');
const posts = require('./routes/posts');

dotenv.config();
const connectionString = process.env.DB_CONNECT;
const PORT = process.env.SERVER_PORT;

// Connect to DB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("Mongoose connected successfully "); },
        error => { console.log("Mongoose could not connect to database: " + error) });

// Middleware
app.use(express.json());
app.use('/api/posts', posts);

// Route middleware
app.use('/api/user', authRoute);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
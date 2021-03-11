const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// import routes
const authRoute = require('./routes/auth');
const addClientData = require('./routes/addClientData');
const viewData = require('./routes/viewData');

dotenv.config();

// Connect to DB
const connectionString = process.env.DB_CONNECT || "mongodb://localhost:27017/ekyc?readPreference=primary&appname=Mongodb%20Compass&ssl=false";
const PORT = process.env.SERVER_PORT;
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("Mongoose connected successfully "); },
        error => { console.log("Mongoose could not connect to database: " + error) });

app.use(cors());

// for CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
})

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/addClientData', addClientData);
app.use('/api/clientData', viewData);

// Route middleware
app.use('/api/user', authRoute);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
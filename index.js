const express = require("express")
const authRoutes = require('./routes/auth')
const passportSetup = require('./config/passport-setup')
const app = express();
const mongoose = require('mongoose');
const keys = require("./config/keys");

// set up view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes)


// create home route
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('app is listening on port 3000')
})

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI).then(
    console.log("CONNTED TO MONGODB")
)

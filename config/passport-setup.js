const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const User = require('../models/user')

passport.use(new GoogleStrategy({
    // options for strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,


}, (accessToken, refreshToken, profile, done) => {
    // passport call back function
    User.findOne({googleId: profile.id}).then((currentUser) => {
        if(currentUser){
            console.log("user id: ", currentUser)
        } else {
            new User({
                username: profile.displayName,
                googleId: profile.id
            }).save().then((newUser) => {
                console.log("new user created: " + newUser)
            })
        }
    })
})
)
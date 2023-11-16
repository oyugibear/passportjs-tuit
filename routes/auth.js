const passport = require('passport');

const router =  require('express').Router();

// auth login
router.get("/login", (req, res) => {
    res.render('login');

})

// auth logout
router.get("/logout", (req, res) => {
    res.send('logging out');

})

// auh with google
router.get('/google', passport.authenticate("google", {
    scope: ['profile']
}))

// google callback routes
router.get('/google/redirect', passport.authenticate("google"), (req, res) => {
    res.send("You have been Called back")
})

module.exports = router;
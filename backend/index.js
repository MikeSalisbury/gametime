const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
 }, (accessToken) => {
  console.log(accessToken);
 })
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google')
);

// passport.use(new FacebookStrategy({
//   clientID: keys.facebookClientID,
//   clientSecret: keys.facebookClientSecret,
//   callbackURL: '/auth/facebook/callback'
//  }, (accessToken) => {
//   console.log(accessToken);
//  })
// );

// app.get('/auth/facebook', passport.authenticate('facebook', {
//     scope: ['profile', 'email']
//   })
// );

app.get(
  '/auth/google/callback',
  passport.authenticate('facebook')
);

const PORT =  process.env.PORT || 5000;
app.listen(PORT);

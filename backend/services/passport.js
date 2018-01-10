const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
 },
 (accessToken, refreshToken, profile, done) => {
  // console.log(accessToken);
  // console.log(refreshToken);
  // google id
  console.log(profile.id);
  // email
  console.log(profile.emails[0].value);
  // first name
  console.log(profile.name.givenName);
  // last name
  console.log(profile.name.familyName);
 })
);

passport.use(new FacebookStrategy({
  clientID: keys.facebookAppId,
  clientSecret: keys.facebookAppSecret,
  callbackURL: 'http://localhost:5000/auth/facebook/callback',
  "profileFields": ["email", 'displayName', 'name']
 },
 (accessToken, refreshToken, profile, done) => {
   // facebook id
   console.log(profile.id);
   // email
   console.log(profile.emails[0].value);
   // first name
   console.log(profile.name.givenName);
   // last name
   console.log(profile.name.familyName);
 })
);

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
 },
 (accessToken, refreshToken, profile, done) => {
   User.findOne({ authId: profile.id }).then(existingUser => {

     if (existingUser) {
       return done(null, existingUser);
     } else {
      new User({
       authId: profile.id,
       email: profile.emails[0].value,
       firstName: profile.name.givenName,
       lastName: profile.name.familyName
      }).save()
      .then(user => done(null, user));
     }

   });
  })
 );

passport.use(new FacebookStrategy({
  clientID: keys.facebookAppId,
  clientSecret: keys.facebookAppSecret,
  callbackURL: 'http://localhost:5000/auth/facebook/callback',
  "profileFields": ["email", 'displayName', 'name']
 },
 (accessToken, refreshToken, profile, done) => {
   User.findOne({ authId: profile.id }).then(existingUser => {

     if (existingUser) {
       return done(null, existingUser);
     } else {
      new User({
       authId: profile.id,
       email: profile.emails[0].value,
       firstName: profile.name.givenName,
       lastName: profile.name.familyName
      }).save()
      .then(user => done(null, user));
     }

   });
  })
 );

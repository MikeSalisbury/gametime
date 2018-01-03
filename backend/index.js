const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const app = express();

passport.use(new GoogleStrategy());
passport.use(new FacebookStrategy());

const PORT =  process.env.PORT || 5000;
app.listen(PORT);

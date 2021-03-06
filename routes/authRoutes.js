const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const app = require('../index.js');


module.exports = app => {

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/auth/google' }),
    (req, res) => {
      res.redirect(process.env.PORT? '/' : 'http://localhost:3000/');
    }
  );

  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {
      scope: ['email']
    })
  );

  // app.get(
  //   '/auth/facebook/callback',
  //   passport.authenticate('facebook')
  // );

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
    (req, res) => res.redirect('/')
  );

  app.get(
    '/api/logout', (req, res) => {
      req.logout();
      res.redirect('/');
    });

  app.get(
    '/api/current_user', (req, res) => {
      res.send(req.user);
    });

};

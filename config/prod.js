module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  facebookAppId: process.env.FACEBOOK_APP_ID,
  facebookAppSecret: process.env.FACEBOOK_APP_SECRET,
  googleURICallback: 'https://gametimeapp.herokuapp.com/auth/google/callback',
  facebookURICallback: 'https://gametimeapp.herokuapp.com/auth/facebook/callback/',
  mongoURI: process.env.MONGO_URI,
  cookieKey1: process.env.COOKIE_KEY_1,
  cookieKey2: process.env.COOKIE_KEY_2,
  googleMap: process.env.GOOGLE_MAP,
};

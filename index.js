const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
require('./models/Game');

mongoose.connect(keys.mongoURI);

const app = express();

// 30 day expiry
app.use(
  cookieSession({
    name: 'session',
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey1, keys.cookieKey2]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/gameRoutes')(app);

if (process.env.NODE_ENV === 'Production') {
  // Express will serve up production assets
  // Like main.js or main.css files
  app.use(express.static('client/build'));
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT =  process.env.PORT || 5000;
app.listen(PORT);

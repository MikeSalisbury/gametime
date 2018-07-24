const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Game');
require('./services/passport');

mongoose.connect(keys.mongoURI, {useMongoClient: true});

const app = express();

// This will parse the body for any POST or PATCH Requests received
// Use req.body to handle payload within route.

// 30 day expiry
app.use(
  cookieSession({
    name: 'session',
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey1, keys.cookieKey2]
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/gameRoutes')(app);

if (process.env.NODE_ENV === 'production') {
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

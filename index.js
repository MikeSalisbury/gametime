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

const PORT =  process.env.PORT || 5000;
app.listen(PORT);

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database');

// Routing
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const menuRouter = require('./routes/menu');

// Dotenv setup
require('dotenv').config({ path: './config/.env' });

connectDB();

// Server Middleware setup
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongoUrl: process.env.DB_STRING }),
  })
);

// Passport config
// require('./config/passport')(passport);

// Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

app.use(flash());

// add routes here
app.use('/', indexRouter);
app.use('/menu', menuRouter);
app.use('/login', loginRouter);

// App port listen
app.listen(process.env.PORT, () => {
  console.log('Server is running, you better catch it!');
});

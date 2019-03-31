//This file can also be called index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Connect to db
mongoose
  .connect(db)
  .then(()=>console.log('MongoDB connected'))
  .catch(err=> console.log(err));

//passport middleware
app.use(passport.initialize());
//passport config
require('./config/passport')(passport);

//Let's write our first route
app.get('/', (req, res) => res.send('Hello from the other side!'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 6300;
app.listen(port, ()=> console.log(`Server running on port ${port}`));

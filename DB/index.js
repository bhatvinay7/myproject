const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EventRouter = require('./routes/event.route.js');
const AptRouter = require('./routes/apt.route.js');
const CoderesourceRouter = require('./routes/coderesource.route.js');
const SignInRouter = require('./routes/signIn.route.js');
const RegistrationRouter = require('./routes/registration.route.js');
const bodyParser = require('body-parser');
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/event', EventRouter);
app.use('/api/coderesource', CoderesourceRouter);
app.use('/api/aptitude', AptRouter);
app.use('/api', SignInRouter);
app.use('/api', RegistrationRouter);

const VITE_REACT_KEY_VALUE = process.env.VITE_REACT_KEY_VALUE
const VITE_REACT_DB_NAME =process.env.VITE_REACT_DB_NAME
mongoose.connect(`mongodb+srv://${VITE_REACT_KEY_VALUE}@cluster0.kpagkqo.mongodb.net/${VITE_REACT_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    app.listen(3004, () => {
      console.log('Connected successfully.');
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
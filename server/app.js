const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { mongooseConnect } = require('../database/dbConnect');

const app = express();
require('dotenv').config();


mongooseConnect();

app.use(cors({
  origin: '*', 
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
const userRouter = require('../routes/User');
const applicationRouter = require('../routes/Application');
const jobRouter = require('../routes/Job');

app.use('/api/v1/user', userRouter);
app.use('/api/v1/application', applicationRouter);
app.use('/api/v1/job', jobRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { mongooseConnect } = require('../database/dbConnect');

const app = express();
require('dotenv').config();


mongooseConnect();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin",   process.env.FRONTEND_URL);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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

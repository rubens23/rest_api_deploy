'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const errorHandler = require('./lib/error-handler');

const dbPort = process.env.MONGODB_URI || 'mongodb://localhost/dev_db';
console.log('dbPort', 'dbPort')
mongoose.connect(dbPort);

const playerRouter = require('./routes/player-routes');

app.use('/nbaPlayers', playerRouter);
app.use('/nflPlayers', playerRouter);

app.use((err, req, res, next) => {
  res.status(500).json({message: err.message});
});

app.listen(3000, () => console.log('up on 3000'));

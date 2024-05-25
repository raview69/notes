#!/usr/bin/env node


const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');


const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);


const port = 3000;
app.set('port', port);


app.listen(port, () => {
  console.log("Server is running on " + port);
});
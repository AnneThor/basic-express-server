'use strict';

require('dotenv').config();
const server = require('./src/server.js');
const port = process.env.PORT;

server.start(port);
const express = require('express');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');

const app = express();
app.use(express.json());
app.use(logger);

app.get('/person', validator, (req, res) => {
  res.json({name: req.query.name});
});

app.get('/', (req, res) => {
  res.status(200).send(`You're up and running!`)
})

app.use('*', notFound);
app.use(errorHandler);

const start = (port) => {
  app.listen(port, () => {
    console.log(`Server listening on Port ${port}`);
  });
};

module.exports = {
  server: app,
  start: start,
};

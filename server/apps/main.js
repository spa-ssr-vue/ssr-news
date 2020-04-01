const express = require('express')
const app = express()

// database
require('./../libs/db/db')(app)

app.use('/', (req, res, next) => {
  res.send('OK!');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
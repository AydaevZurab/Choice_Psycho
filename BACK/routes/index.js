const { Router } = require('express');

const app = Router();

app.use(require('./test.routes'))
app.use(require('./text.routes'))

module.exports = app;
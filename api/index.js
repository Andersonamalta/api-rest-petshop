const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('../config/default.json');

app.use(bodyParser.json());

app.listen(config.get('api.porta'), () => console.log('A API está funcionando!!'));
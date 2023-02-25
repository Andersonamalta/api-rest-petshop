const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('../config/default.json');
const roteador = require('./rotas/fornecedores');

app.use(bodyParser.json());

app.use('/api/fornecedores', roteador);

app.listen(3000, () => console.log('A API está funcionando!!'));
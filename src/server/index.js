// Requires
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const config = require('./config/config');

// Inicializar variables
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
});


// Configuracion de rutas
app.use(require('./routes/index'));


// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto: ', process.env.PORT);
});
'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//archivos de rutas
var routes = require('../routes/dummy');


// middlewares (capa que se ejecuta antes de un controlador)
app.use(bodyParser.urlencoded({extended:false})); //con esto parseamos los datos de la petición
app.use(bodyParser.json()) ;//Convertimos los datos en JSON

//CORS y Cabeceras
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
app.use('/', routes)

// exportar el modulo app
module.exports = app;


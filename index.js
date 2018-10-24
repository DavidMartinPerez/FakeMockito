'use strict'
var fs = require('fs');
var path = require('path');
let config = JSON.parse(fs.readFileSync(path.join('./config/config.json'), 'utf8'))

var app = require('./app/dummy.js'); //configuracion de app
var port = config.port; //puerto del servidor

app.listen(port, () => {
    console.log(`####### Server corriendo en http://localhost:${port}`)
    console.log(`####### Comprueba el formato de los mock -> http://localhost:${port}/json-format`)
    console.log(`####### Comprueba la urls disponibles  -> http://localhost:${port}/urls`)
    //TODO: controlar rutas sin / comprobar siempre las rutas cuando se hace una petición para poder recargar los ficheros en caliente ;)
})
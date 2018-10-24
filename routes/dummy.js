'use strict'

var fs = require('fs');
var path = require('path');
var express = require('express');
var dummyController = require("../controllers/dummy");
var router = express.Router();

let config = JSON.parse(fs.readFileSync(path.join('./config/config.json'), 'utf8'))
var filePath = path.join(config.dummyJson);

let allRoutes = [
    { "route" : "/test", "description" : "" },
    { "route" : "/jsonFormat", "description" : "" },
    { "route" : "/urls", "description" : "" },
    { "route" : "Not Fount", "description" : "" }
];

let array = JSON.parse(fs.readFileSync(filePath, 'utf8'))

array.forEach(element => {
    let route = element.route;
    let dummy = element.dummy;
    let status = element.status;
    let description = element.description ? element.description : "";

    if(element != null && route != null && dummy != null && status != null){

        allRoutes.push({
            route,
            description
        })

        router.all(route, (req, res) => {
            console.log(`|-> ${route} |-> ${JSON.stringify(dummy)} `)
            res.status(element["status"]).send(dummy)
        });

    } else {
        console.log(`###-- Error format JSON in "${element.route}" : look format -> http://localhost:${config.port}/json-format --##`)
    }
});
// configuracion de rutas
router.all('/test', dummyController.test)
router.all('/json-format', dummyController.jsonFormat)
router.all('/urls', (req,res) => { res.status(200).send(allRoutes) })
router.use(dummyController.error404);

module.exports = router;
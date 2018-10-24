var fs = require('fs');
var path = require('path');
let config = JSON.parse(fs.readFileSync(path.join('./config/config.json'), 'utf8'))

let json = [{
    "route"       : "(String) Route of the request",
    "dummy"       : "(JSON) Json server response",
    "status"      : "(Number) Response status",
    "description" : "(String) Optional, information about the service"
},{
    "route"       : "/example",
    "dummy"       : {"test" : "test response"},
    "status"      : 200,
    "description" : "optional, description about the service"
}]
let notFound = config.notFound;

var controller = {
    test: function(req,res){
        res.status(200).send({'server':'ready'});
    },
    jsonFormat: function(req,res){
        res.status(200).send(json);
    },
    urls: function(req,res){
        res.status(200).send("routes");
    },
    error404: function(req, res, next) {
        res.send(notFound)
        next();
    },
    fn : function(req, res){
        console.log(`|-> ${route} |-> ${JSON.stringify(dummy)} `)
        res.status(element["status"]).send(dummy)
    }
}

module.exports = controller;
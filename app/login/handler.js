'use strict';
var jwt = require("jsonwebtoken");

module.exports.handler = function(event, context, cb) {
  if(event.username === "pepeeltoro"){
    var resultado = {
      "username": event.username,
      "permissions": {
        "CheapWeather": true,
        "MultiWeather": true,
        "getWeatherAvgs": false
      }
    }
    var token = jwt.sign(resultado, "abc123!@#");
    cb(null, {token:token});
  }
  else{
    cb("Error");
  };
};

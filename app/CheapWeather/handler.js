'use strict';
var wHelper = require('../lib/WeatherHelper.js');

module.exports.handler = function(event, context, cb) {
  wHelper.GetWeather(event.city, function (err, data){
    if(err){
      console.log(err);
    }
    else{
      cb(null, data);
    }

  });
};

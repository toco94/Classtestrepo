'use strict';
var wHelper = require('../../.././WeatherHelper.js');

module.exports.handler = function(event, context, cb) {
  wHelper.GetMultiWeather(event.cities, function (err, data){
    if(err){
      console.log(err);
    }
    else{
      cb(null, data);
    }

  });
};

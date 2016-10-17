'use strict';
var DynHelper = require('../lib/DynamoHelper.js');

module.exports.handler = function(event, context, cb) {
  DynHelper.WeatherAvgLoop(function (err, data){
    if(err){
      console.log(err);
    }
    else{
      cb(null, data);
    }
  });
};

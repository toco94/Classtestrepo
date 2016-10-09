'use strict';
var request = require("request");

module.exports.handler = function(event, context, cb) {

  var params = JSON.parse(event.Records[0].Sns.Message);
  //var msg = params.commits[0].message;
  request.post("https://slack.com/api/chat.postMessage?token=tokenhere&channel=projectlemon&text=" + params.pusher.name + ": " + params.commits[0].message , function(err, data){
    if(err){
      cb(err);
    }
    else{
      var response = JSON.parse(data.body);
      cb(null);
    }
  })
};

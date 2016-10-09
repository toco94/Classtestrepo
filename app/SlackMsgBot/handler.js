'use strict';
var request = require("request");
module.exports.handler = function(event, context, cb) {

  request.post("https://slack.com/api/chat.postMessage?token=tokenhere&channel=projectlemon&text=" + event.message , function(err, data) {
    if (err) {
      cb(err);
    }
    else {
      cb(null, data);
    }
  })
};

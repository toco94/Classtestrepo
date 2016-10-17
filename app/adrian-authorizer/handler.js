'use strict';
var jwt = require("jsonwebtoken");

module.exports.handler = function(event, context, cb) {
  var policy = {
    "principalId": "arn:aws:iam::717454164754:user/jax.jaquez@gmail.com",
    "policyDocument": {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Deny",
          "Action": [
            "execute-api:Invoke",
            "lambda:Invoke"
          ],
          "Resource": [
            "arn:aws:execute-api:us-east-1:292274580527:685ci3h4f1/*/GET/WeatherAvgs"
          ]
        }
      ]
    }
  };



  jwt.verify(event.authorizationToken, "abc123!@#", function(err, decoded){
      if(err){
        return cb(null, policy);
      }
      if(decoded.username === "pepeeltoro"){
        policy.policyDocument.Statement[0].Effect = "Allow"
      }
      cb(null, policy);
    })
};

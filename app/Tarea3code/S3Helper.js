/**
 * Created by adrian on 3/09/16.
 */
var AWS = require("aws-sdk");
var s3 = new AWS.S3();
var fs = require("file-system");
var http = require('http');
module.exports.DownFromS3 = function(bucket, key, path,callback){
  var params = {
    Bucket: bucket,
    Key: key,
    Path: path,
  };

  var file = require('fs').createWriteStream('squid.jpg');
  s3.getObject(params).createReadStream().pipe(file);

  var request = http.get("http://s3.amazonaws.com/successfulstudent/squid.jpg", function(response){
    response.pipe(file);
  })
}

//IT DIDNT WORK haha




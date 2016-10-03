/**
 * Created by adrian on 3/09/16.
 */
var AWS = require('aws-sdk');
var s3 = new AWS.S3();


var file = require('fs').createWriteStream('squid.jpg');
s3.getObject({
  Bucket: 'successfulstudent',
  Key: 'squid.jpg'}).createReadStream().pipe(file);


s3.getObject({
  Bucket: 'successfulstudent',
    Key: 'squid.jpg'},
  function(error, data){
    if(error){
      console.log(error)
    }
    else{
      if(data.Metadata.move == 'true'){
        var stream = require('fs').createReadStream('squid.jpg');
        s3.upload({
          Bucket: 'cc116-assignment3',
          Key: '18183/squid.jpg',
          Body: stream,
        }, function(error, data){
          if(error){
            console.log(error)
          }
          else{
            console.log("it works");
          }
        })
      }
      else{
        console.log("metadata move is not true");
      }
    }
  });


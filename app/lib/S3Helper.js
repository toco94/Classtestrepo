/**
 * Created by adrian on 8/09/16.
 */
var AWS = require("aws-sdk");

var s3 = new AWS.S3();

module.exports.SaveInS3 = function(bucket, key, content, callback){
    var params = {
        Bucket: bucket,
        Key: key,
        Body: content,
        ACL: "public-read",
        Metadata: {Move: "true" }
    };

    s3.upload(params, function(error,data) {
        if(error){
            callback(error);
        }
        else{
            callback(null,data);
        }
    });
};

module.exports.ReadFromS3 = function(bucket, key, callback){
    var params = {
        Bucket: bucket,
        Key: key
    };

    s3.getObject(params, function(error, data){
        if(error){
            callback(error);
        }
        else{
            //console.log();
            callback(null, JSON.parse(data.Body));
        }
    })
};

module.exports.listBucketObjects = function(bucket, callback){
    var  params = {
        Bucket: bucket
    }

    console.log(bucket);

    s3.listObjectsV2(params, function(err, data){
        if(err){
            callback(err);
        }
        else {


            var filenames = data.Contents.map(function(object){
                return object.Key
            });

            //callback(null, data);
            callback(null, filenames);
        }
    })
}
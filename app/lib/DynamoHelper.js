var aws = require("aws-sdk");
var docClient = new aws.DynamoDB.DocumentClient({region: "us-east-1"});
var uuid = require("uuid");

module.exports.saveWeather = function(city, temp, cb){
    var params = {
        TableName: "SuccessfulTable",
        Item: {
            WhoopId: uuid.v1(),
            City: city,
            Temp: temp
        }
    }

    docClient.put(params, function(err,data){
        if(err){
            return cb(err);
        }
        else{
            return cb(null, "Done");
        }
    })
};

module.exports.WeatherAvg = function(cb){
    params = {
        TableName: "SuccessfulTable",
        ProjectionExpress: "City, #Temp",
        ExpressAttributeNames: {
            "#Temp": "Temp"
        }
    }

    docClient.scan(params, function(err, data){
        if(err){
            cb(err);
        }
        else{
            var result = {}
            var sum = {}
            var count = {}


            data.Items.forEach(function(value){
                if(sum[value.City]){
                    sum[value.City] += value.Temp;
                    count[value.City] += 1;
                }
                else{
                    sum[value.City] =  value.Temp;
                    count[value.City] = 1;
                }
            });

            for(var key in sum){
                result[key] = sum[key] / count[key];
            }

            cb(null, result);

        };

    });



};


function getAll(LastKey, result, sum, count) {
    params = {
        TableName: "SuccessfulTable",
        ExclusiveStartKey: LastKey,
        ProjectionExpress: "City, #Temp",
        ExpressAttributeNames: {
            "#Temp": "Temp"
        }
    }

    docClient.scan(params, function(err, data){
        if(err){
            console.log(err);
        }
        else{
            var result = result
            var sum = sum
            var count = count


            data.Items.forEach(function(value){
                if(sum[value.City]){
                    sum[value.City] += value.Temp;
                    count[value.City] += 1;
                }
                else{
                    sum[value.City] =  value.Temp;
                    count[value.City] = 1;
                }
            });

            if(data.LastEvaluatedKey != null){
                getAll(data.LastEvaluatedKey, result, sum, count)
            }

            else{
                for(var key in sum){
                    result[key] = sum[key] / count[key];
                    return(result)
                }
            }
        };

    });
}


module.exports.WeatherAvgLoop = function(cb){
    params = {
        TableName: "SuccessfulTable",
        ProjectionExpress: "City, #Temp",
        ExpressAttributeNames: {
            "#Temp": "Temp"
        }
    }

    docClient.scan(params, function(err, data){
        if(err){
            cb(err);
        }
        else{
            var result = {}
            var sum = {}
            var count = {}


            data.Items.forEach(function(value){
                if(sum[value.City]){
                    sum[value.City] += value.Temp;
                    count[value.City] += 1;
                }
                else{
                    sum[value.City] =  value.Temp;
                    count[value.City] = 1;
                }
            });

            if(data.LastEvaluatedKey != null){
                cb(null, getAll(data.LastEvaluatedKey, result, sum, count))
            }

            else{
                for(var key in sum){
                    result[key] = sum[key] / count[key];
                }
                cb(null, result);
            }


        };

    });



};
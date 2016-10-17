var aws = require("aws-sdk");
var lambda = new aws.Lambda({region: "us-east-1"});
var request = require("request");
var async = require("async");
var DynHelper = require('DynamoHelper.js');

module.exports.GetWeather = function(city, cb){
    request.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ea4dd97a55fefeb38dcd3364cbacfd74", function(err, data){
        if(err){
            cb(err);
        }
        else{
            var response = JSON.parse(data.body);
            var result = "El clima de " + city + " es de " + response.main.temp + " grados Kelvin.";
            DynHelper.saveWeather(city, response.main.temp, function(err, data){
                if (err){
                    console.log(err);
                }
                else{
                    console.log(null,data);
                }
            })
            cb(null,result);
        }
    })

}

module.exports.GetMultiWeather = function(cities, cb) {

    var saveLambdas = cities.map(function (city) {
        return async.apply(GetWeather, city);
    });

    async.parallel(saveLambdas, function (err, data) {
        if (err) {
            cb(err);
        }
        else {

            cb(null, data)

        }
    });
}
    function GetWeather(city, cb) {

        var params = {
            FunctionName: "ComoQuieran-CheapWeather",
            InvocationType: "RequestResponse",
            Payload: JSON.stringify({"city": city})
        };

        lambda.invoke(params, function(err, data){
                if(err){
                    console.log(err);
                }
                else{
                    cb(null, data.Payload);
                }


        });

    }




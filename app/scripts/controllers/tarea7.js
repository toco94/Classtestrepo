'use strict';

/**
 * @ngdoc function
 * @name succesfulstudentApp.controller:Tarea7Ctrl
 * @description
 * # Tarea7Ctrl
 * Controller of the succesfulstudentApp
 */
angular.module('succesfulstudentApp')
  .controller('Tarea7Ctrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getMultiWeather = function(){
      var data = {cities: $scope.cities.split(",")};
      var url = "https://685ci3h4f1.execute-api.us-east-1.amazonaws.com/dev/MultiWeather";

      $http.put(url, data)
        .success(function(data){
          $scope.citiesWeather = data;
        })
        .error(function(error){
          alert(error);
        })
    };

    //Securepart

    $scope.getWeather = function(){
      var data = {cities: $scope.cities.split(",")};
      var url = "https://685ci3h4f1.execute-api.us-east-1.amazonaws.com/dev/MultiWeather";

      $http.put(url, data)
        .success(function(data){
          $scope.citiesWeather = data;
        })
        .error(function(error){
          alert(error);
        })
    };

    $scope.getWeatherAvgs = function(){
      var url = "https://685ci3h4f1.execute-api.us-east-1.amazonaws.com/dev/WeatherAvgs";

      $http.get(url, {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      })
        .success(function(data){
          $scope.citiesAvgs = data;
        })
        .error(function(error){
          alert("You probably don't have permission :)");
        })
    };

    $scope.valid = function(valid){
      var url = "https://685ci3h4f1.execute-api.us-east-1.amazonaws.com/dev/login";
      var credentials = {
        "username": "foo",
        "password": "tucita"
      }

      credentials.username = valid ? "pepeeltoro": "foo";

      $http.post(url, credentials)
        .success(function(data){
          localStorage.setItem("token", data.token);
        })
        .error(function(error){
          alert(error);
        });
    }

  });

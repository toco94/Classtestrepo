'use strict';

/**
 * @ngdoc function
 * @name succesfulstudentApp.controller:Tarea5Ctrl
 * @description
 * # Tarea5Ctrl
 * Controller of the succesfulstudentApp
 */
angular.module('succesfulstudentApp')
  .controller('Tarea5Ctrl', function ($scope, $http) {
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

  });

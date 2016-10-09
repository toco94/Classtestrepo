'use strict';

/**
 * @ngdoc function
 * @name succesfulstudentApp.controller:Tarea6Ctrl
 * @description
 * # Tarea6Ctrl
 * Controller of the succesfulstudentApp
 */
angular.module('succesfulstudentApp')
  .controller('Tarea6Ctrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sendToSlack = function(){
      var data = {message: $scope.message};
      var url = "https://685ci3h4f1.execute-api.us-east-1.amazonaws.com/dev/SlackMsgBot";

      $http.put(url, data)
        .success(function(data){
          $scope.success = "Sent I think:)";
        })
        .error(function(error){
          $scope.success(error);
        })
    };


  });

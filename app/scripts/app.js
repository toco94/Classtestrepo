'use strict';

/**
 * @ngdoc overview
 * @name succesfulstudentApp
 * @description
 * # succesfulstudentApp
 *
 * Main module of the application.
 */
angular
  .module('succesfulstudentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/tareas', {
        templateUrl: 'views/tareas.html',
        controller: 'TareasCtrl',
        controllerAs: 'tareas'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

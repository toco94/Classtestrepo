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
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
        controllerAs: 'team'
      })
      .when('/tarea2', {
        templateUrl: 'views/tarea2.html',
        controller: 'Tarea2Ctrl',
        controllerAs: 'tarea2'
      })
      .when('/tarea3', {
        templateUrl: 'views/tarea3.html',
        controller: 'Tarea3Ctrl',
        controllerAs: 'tarea3'
      })
      .when('/tarea5', {
        templateUrl: 'views/tarea5.html',
        controller: 'Tarea5Ctrl',
        controllerAs: 'tarea5'
      })
      .when('/tarea6', {
        templateUrl: 'views/tarea6.html',
        controller: 'Tarea6Ctrl',
        controllerAs: 'tarea6'
      })
      .when('/tarea7', {
        templateUrl: 'views/tarea7.html',
        controller: 'Tarea7Ctrl',
        controllerAs: 'tarea7'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';
var App = angular.module('App', ['ngRoute'])
        .run(function ($rootScope) {
            $rootScope.carts = [];
        });

/**
 * @ngdoc overview
 * @name wilfriedbobogithubioApp
 * @description
 * # wilfriedbobogithubioApp
 *
 * Main module of the application.
 */
/*angular
  .module('wilfriedbobogithubioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])*/
  App.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/accueil', {
        templateUrl: '/index.html',
        controller: 'indexCtrl'
      })
      .when('/presentation', {
        templateUrl: 'assets/partials/presentation.html',
        controller: 'presenCtrl'
      })
      .when('/competences', {
        templateUrl: 'assets/partials/competence.html',
        controller: 'compeCtrl'
      })
      .when('/experiences', {
        templateUrl: 'assets/partials/experience.html',
        controller: 'expeCtrl'
      })
      .when('/contacts', {
        templateUrl: 'assets/partials/contact.html',
        controller: 'contaCtrl'
      })
      .when('/loisirs', {
        templateUrl: 'assets/partials/loisirs.html',
        controller: 'loisiCtrl'
      })
      .otherwise({
        redirectTo: '/accueil'
      });
  }]);
  App.controller('indexCtrl', ['$scope', function($scope){
          
  }]);

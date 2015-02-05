'use strict';

/**
 * @ngdoc overview
 * @name newsApp
 * @description
 * # newsApp
 *
 * Main module of the application.
 */
angular
  .module('newsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'saploService'

  ])
  .config(function ($routeProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/article', {
        templateUrl: 'views/news-article.html'
      })
      .when('/saplo', {
        templateUrl: 'views/main.html',
        controller: 'SaploCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
    $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('orange');
  });


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
      .when('/article/:id', {
        templateUrl: 'views/news-article.html',
        controller: 'newsArticleCtrl'
      })
      .when('/author/:id', {
        templateUrl: 'views/author-articles.html'
        //controller: 'AuthorArticlesCtrl'
      })
      .when('/saplo', {
        templateUrl: 'views/main.html',
        controller: 'SaploCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('orange');
  });


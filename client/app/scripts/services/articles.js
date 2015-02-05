'use strict';

/**
 * @ngdoc service
 * @name newsApp.articles
 * @description
 * # articles
 * Service in the newsApp.
 */
angular.module('newsApp')
  .service('articles', ['$http' ,function ($http) {

    this.getArticles = function () {

      return $http.get('http://localhost:3000/api/articles');
    }
  }]);

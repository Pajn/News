'use strict';

/**
 * @ngdoc service
 * @name newsApp.filterService
 * @description
 * # filterService
 * Service in the newsApp.
 */
angular.module('newsApp')
  .service('filterService', ['$http' ,function ($http) {

    this.getConcepts = function () {
      return $http.get('http://localhost:3000/api/concepts');
    }

    this.getScopes = function () {
      return $http.get('http://localhost:3000/api/scopes');
    }
  }]);

'use strict';

/**
 * @ngdoc service
 * @name newsApp.wikiData
 * @description
 * # wikiData
 * Service in the newsApp.
 */
angular.module('newsApp')
  .service('wikiData', ['$http' ,function ($http) {

    this.getWikiData = function (title) {
      return $http.get('http://localhost:3000/api/wikidata/'+title);
    }
  }]);

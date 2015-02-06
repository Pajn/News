'use strict';

/**
 * @ngdoc service
 * @name newsApp.articleCategory
 * @description
 * # articleCategory
 * Service in the newsApp.
 */
angular.module('newsApp')
  .service('articleCategory', ['$http', function ($http) {

    this.getRelatedArticles= function (id) {

      return $http.get('http://localhost:3000/api/articles/' + id);
    }
  }]);

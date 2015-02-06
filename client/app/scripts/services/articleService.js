/**
 * Created by Tobias on 2015-02-06.
 */

'use strict';

/**
 * @ngdoc service
 * @name newsApp.articles
 * @description
 * # articles
 * Service in the newsApp.
 */
angular.module('newsApp')
  .service('articleService', ['$http' ,function ($http) {

    this.getArticles = function (articleId) {
      return $http.get('http://localhost:3000/api/articles/'+articleId);
    }
  }]);


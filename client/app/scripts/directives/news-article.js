'use strict';

/**
 * @ngdoc directive
 * @name newsApp.directive:newsArticle
 * @description
 * # newsArticle
 */
angular.module('newsApp')
  .directive('newsArticle', function () {
    return {
      templateUrl: 'partials/news-article.html',
      restrict: 'E',
    };
  });

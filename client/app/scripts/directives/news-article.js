'use strict';

/**
 * @ngdoc directive
 * @name newsApp.directive:newsArticle
 * @description
 * # newsArticle
 */
angular.module('newsApp')
  .controller('newsArticleCtrl', ['$scope', 'articleCategory', '$routeParams', function($scope, articleCategory, $routeParams) {

    articleCategory.getRelatedArticles($routeParams.id)
      .success(function (data) {

        $scope.relatedArticles = data;
        $scope.article = data.article;
        $scope.item = data;
        //$scope.author = data.author;
      });

  }])
  .directive('newsArticle', function () {
    return {
      templateUrl: 'partials/news-article.html',
      restrict: 'E'
    };
  });

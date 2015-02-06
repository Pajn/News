'use strict';

/**
 * @ngdoc directive
 * @name newsApp.directive:newsArticle
 * @description
 * # newsArticle
 */
angular.module('newsApp')
  .controller('newsArticleCtrl', ['$scope', 'articleCategory', '$routeParams', 'wikiData', function($scope, articleCategory, $routeParams, wikiData) {

    articleCategory.getRelatedArticles($routeParams.id)
      .success(function (data) {

        $scope.articles = data;
        $scope.article = data.article;
        $scope.item = data;

      $scope.wikiData = [];
      console.log($scope.item.concepts);
      $scope.item.concepts.forEach(function (con) {
        if (con.name === 'IS') {
          con.name = 'Islamiska staten';
        }
        console.log(con);
        wikiData.getWikiData(con.name).success(function(data) {
          var content = data.parse.text['*'].match(/\<p\>((.|\n)*?)\<\/p\>/gmi)[1];
          if (typeof content === 'undefined') {
            return;
          }
          content = content.replace(/\<((.|\n)*?)\>/gmi, '');
          content = content.replace(/\[((.|\n)*?)\]/gmi, '');
          $scope.wikiData.push({'content': content, 'title': con.name});
          console.log($scope.wikiData);
        });
      });
        //$scope.author = data.author;
      });

  }])
  .directive('newsArticle', function () {
    return {
      templateUrl: 'partials/news-article.html',
      restrict: 'E'
    };
  });

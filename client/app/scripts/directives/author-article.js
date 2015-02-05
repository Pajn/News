/**
 * Created by Tobias on 2015-02-05.
 */

angular.module('newsApp').controller('AuthorArticlesCtrl', ['$scope', '$routeParams', 'ArticlesByAuthor',
  function($scope, ArticlesByAuthor, $routeParams) {
    ArticlesByAuthor.getArticles('2c859005-ad7f-11e4-936a-e124830f2840').success(function(data){
      console.log('rrfgds');
      console.log($routeParams.id);
      $scope.authorItems = data;
      console.log(data);
    })
  }
]).directive('authorArticle', [
  function() {
    return {
      templateUrl: 'partials/card.html',
      restrict: 'E',
    };
  }
]);

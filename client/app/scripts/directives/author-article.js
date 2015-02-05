/**
 * Created by Tobias on 2015-02-05.
 */

angular.module('newsApp').controller('AuthorArticlesCtrl', ['$scope', '$routeParams', 'ArticlesByAuthor',
  function($scope, $routeParams, ArticlesByAuthor) {
    ArticlesByAuthor.getArticles($routeParams.id).success(function(data){
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

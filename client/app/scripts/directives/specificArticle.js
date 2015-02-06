/**
 * Created by Tobias on 2015-02-06.
 */
/**
 * Created by Tobias on 2015-02-05.
 */

angular.module('newsApp')
  .directive('specificArticle', [
  function() {
    return {
      templateUrl: 'partials/specific-article.html',
      restrict: 'E',
    };
  }
]);

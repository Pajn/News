/**
 * Created by Tobias on 2015-02-05.
 */

angular.module('newsApp')
  .service('ArticlesByAuthor', ['$http' ,function ($http) {

    this.getArticles = function (authorId) {
      return $http.get('http://localhost:3000/api/authors/'+authorId);
    }
  }]);

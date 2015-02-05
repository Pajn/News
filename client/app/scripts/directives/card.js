'use strict';
/**
 * @ngdoc directive
 * @name newsApp.directive:card
 * @description
 * # card
 */
angular.module('newsApp')

  .controller('cardCtrl', ['$scope', 'articles', function($scope, articles) {

        articles.getArticles().success(function(data) {
            $scope.articleList = data;
        });
    }
]).directive('card', ['articles', function() {

        return {
          templateUrl: 'partials/card.html',
          restrict: 'E'
        };
    }
]);

'use strict';

/**
 * @ngdoc directive
 * @name newsApp.directive:card
 * @description
 * # card
 */
angular.module('newsApp')
  .directive('card', ['articles', function (articles) {
    return {
      templateUrl: 'partials/card.html',
      restrict: 'E',
      controller: function () {
        var store = this;
        articles.getArticles().success(function(data) {
          store.articles = data;
        });
      },
      scope: {
        item: "="
      },
      controllerAs: 'cardCtrl'
    };
  }]);

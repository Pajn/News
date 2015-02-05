'use strict';

/**
 * @ngdoc directive
 * @name newsApp.directive:card
 * @description
 * # card
 */
angular.module('newsApp')
  .directive('card', function () {
    return {
      templateUrl: 'partials/card.html',
      restrict: 'E',
      controller: function () {

      },
      controllerAs: 'cardCtrl'
    };
  });

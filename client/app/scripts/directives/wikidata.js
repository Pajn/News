'use strict';
/**
 * @ngdoc directive
 * @name newsApp.directive:card
 * @description
 * # card
 */
angular.module('newsApp').controller('wikiCtrl', ['$scope', 'wikiData',
    function($scope, wikiData) {
      
    }
]).directive('wiki', function () {
    return {
      templateUrl: 'partials/wikidata.html',
      restrict: 'E'
    };
  });

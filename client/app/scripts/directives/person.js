'use strict';

/**
 * @ngdoc directive
 * @name newsApp.directive:person
 * @description
 * # person
 */
angular.module('newsApp')
  .directive('person', function () {
    return {
      templateUrl: 'partials/person.html',
      restrict: 'E',
    };
  });

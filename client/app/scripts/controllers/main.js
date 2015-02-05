'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('MainCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

  }]);

'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('MainCtrl', ['$scope', '$mdSidenav', 'filterService', function($scope, $mdSidenav, filterService){
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

    $scope.scopes = [{}];
    $scope.concepts = [{}];

    filterService.getScopes().then(function(response){
    	$scope.scopes = response.data;
	}); 
	filterService.getConcepts().then(function(response){
		$scope.concepts = response.data;
	}); 

    $scope.selectfilter = function(filter){
        $scope.filterQuery = filter; 
    }
}]);

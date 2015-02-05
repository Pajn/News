'use strict';

/**
 * @ngdoc directive
 * @name newsApp.directive:newsArticle
 * @description
 * # newsArticle
 */
angular.module('newsApp')
  .directive('tagcloud', function () {
    return {
		restrict: 'E',
	  	scope: {
	  		concepts: '=concepts',
	  		clickfunc : '=clickfunc'
	  	},

	  	templateUrl: 'partials/tag-cloud.html',
    };
  });

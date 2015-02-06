'use strict';
/**
 * @ngdoc directive
 * @name newsApp.directive:card
 * @description
 * # card
 */
angular.module('newsApp').controller('wikiCtrl', ['$scope', 'wikiData',
    function($scope, wikiData) {
        wikiData.getWikiData('Islamic_State_of_Iraq_and_the_Levant').success(function(data) {
            $scope.wikiData = data.query.pages;
            // console.log(data.query.pages);
            console.log(Object.keys(data.query.pages));
        });
    }
]).directive('wiki', ['wikiData',
    function(wikiData) {
        return {
            templateUrl: 'partials/wikidata.html',
            restrict: 'E',
        };
    }
]);
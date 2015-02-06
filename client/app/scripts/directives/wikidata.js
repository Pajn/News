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
          console.log($scope.concepts[0].concept.name);
          var content = data.parse.text['*'].match(/\<p\>((.|\n)*?)\<\/p\>/gmi)[1];
          content = content.replace(/\<((.|\n)*?)\>/gmi, '');
          content = content.replace(/\[((.|\n)*?)\]/gmi, '');
          $scope.wikiData = [content];
          console.log(content);
        });
    }
]).directive('wiki', function () {
    return {
      templateUrl: 'partials/wikidata.html',
      restrict: 'E'
    };
  });

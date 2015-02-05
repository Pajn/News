angular.module('saploService', []).factory('App', ['$http', function($http) {
    return {
        get : function() {
            return $http.get(''); 
        },
    }       
}]);

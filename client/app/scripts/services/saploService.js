angular.module('saploService', []).factory('newsApp', ['$http', function($http) {
    var accessTokenUrl = 'https://api.saplo.com/rpc/json/'; 
    var accessTokenObj = {
	  method : "auth.accessToken",
	  params : {
	    api_key : "974e4c91341e278cb3fec4425136176e",
	    secret_key : "3a3184378e9acdcf70a5dde0a8000efc"
	  }
	}; 

    return {
        getAccessToken : function() {
            return $http.post(accessTokenUrl, accessTokenObj); 
        },
    }       
}]);

(function (app) {
	'use strict';
	app.factory('wishListSrvc', ['$http', function(http){
		var methods = {
			getPrimaryMenu: function (){
				return http.get('/categories');
			}
		};

    	return methods;
    }]);    
})(angular.module("Timberland"));
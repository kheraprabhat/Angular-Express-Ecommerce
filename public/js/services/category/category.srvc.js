(function (app) {
	'use strict';
	app.factory('categorySrvc', ['$http', function(http){
		var methods = {
			getSelectedCategoryProducts: function(categoryId){
				return http.get('/products/' + categoryId);
			}
		};
    	return methods;
    }]);    
})(angular.module("Timberland"));
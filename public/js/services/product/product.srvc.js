(function (app) {
	'use strict';
	app.factory('productSrvc', ['$http', function(http){
		var methods = {
			getSelectedProduct: function(categoryId, productId){
				return http.get('/products/selected/' + categoryId + '/' + productId);
			}
		};
    	return methods;
    }]);    
})(angular.module("Meanapp"));
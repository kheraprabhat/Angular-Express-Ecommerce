(function (app) {
	'use strict';
    app.controller('ProductMainCtrl', ['$stateParams', 'productSrvc', function(stateParams, productSrvc){
    	var context = this;
    	context.selectedProduct = [];
    	context.categoryName = stateParams.categoryName;
    	productSrvc.getSelectedProduct(stateParams.categoryName, stateParams.productId).then(function(response){
    		context.selectedProduct = response.data[0];
    	});
    }]);
})(angular.module("Timberland"));
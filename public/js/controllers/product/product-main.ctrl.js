(function (app) {
	'use strict';
    app.controller('ProductMainCtrl', ['$stateParams', 'productSrvc', function(stateParams, productSrvc){
    	var vm = this;
    	vm.selectedProduct = [];
    	vm.categoryName = stateParams.categoryName;
    	productSrvc.getSelectedProduct(stateParams.categoryName, stateParams.productId).then(function(response){
    		vm.selectedProduct = response.data[0];
    	});
    }]);
})(angular.module("Timberland"));
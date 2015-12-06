(function (app) {
	'use strict';
    app.controller('ProductMainCtrl', ['$stateParams', 'utility', function(stateParams, utility){
    	var vm = this, serviceUrl;
    	vm.selectedProduct = [];
    	vm.categoryName = stateParams.categoryName;

    	serviceUrl = '/products/selected/' + stateParams.categoryName + '/' + stateParams.productId;
    	utility.getData(serviceUrl).then(function(data){
    		vm.selectedProduct = data[0];
    	});
    }]);
})(angular.module("Meanapp"));
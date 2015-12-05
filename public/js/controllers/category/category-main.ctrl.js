(function (app) {
	'use strict';
    app.controller('CategoryMainCtrl', ['$stateParams', 'utility', 'categorySrvc', 
    	function(stateParams, utility, categorySrvc){
    	var vm = this, queryString;

    	vm.categoryName 						= stateParams.categoryName;
    	/* declear scope variable for view */
    	vm.selectedCategoryProducts 			= [];
    	vm.totalBrandsAvailableproducts 		= [];
    	vm.totalProductTypeAvailableproducts 	= [];
    	vm.getProductPriceRange 				= [];
    	
    	/* get all products for selected category */
    	utility.getData('/products/' + vm.categoryName).then(function(data){
    		vm.selectedCategoryProducts = data;
    	});

    	/* get All Type Products Length */
    	queryString = utility.queryStingFormat({categoryId: vm.categoryName, fieldName: 'brand'});
    	utility.getData('/products/getProductCount' + queryString).then(function(data){
    		vm.totalBrandsAvailableproducts = data;
    	});

    	/* get product type available count */
    	queryString = utility.queryStingFormat({categoryId: vm.categoryName, fieldName: 'type'});
    	utility.getData('/products/getProductCount' + queryString).then(function(data){
    		vm.totalProductTypeAvailableproducts = data;
    	});

    	/* get product price range available [min to max] */
    	queryString = utility.queryStingFormat({categoryId: vm.categoryName, fieldName: 'price'});
    	utility.getData('/products/getProductRange' + queryString).then(function(data){
    		vm.getProductPriceRange = data;
    	});
    }]);
})(angular.module("Timberland"));
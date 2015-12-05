(function (app) {
	'use strict';
    app.controller('CategoryMainCtrl', ['$stateParams', 'utility', 'categorySrvc', 
    	function(stateParams, utility, categorySrvc){
    	var context = this;
    	/* declear scope variable for view */
    	context.selectedCategoryProducts = [];
    	context.totalBrandsAvailableproducts = [];

    	context.categoryName = stateParams.categoryName;
    	
    	/* get all products for selected category */
    	utility.getData('/products/' + stateParams.categoryName).then(function(data){
    		context.selectedCategoryProducts = data;
    	});

    	/* get All Type Products Length */
    	utility.getData('/products/getAllTypeProductsLength').then(function(data){
    		context.totalBrandsAvailableproducts = data;
    	});

    	console.log(utility.queryStingFormat({name: 'krishna', age: 27}));
    }]);
})(angular.module("Timberland"));
(function (app) {
	'use strict';
    app.controller('CategoryMainCtrl', ['$stateParams', 'categorySrvc', function(stateParams, categorySrvc){
    	var context = this;
    	context.selectedCategoryProducts = [];
    	context.categoryName = stateParams.categoryName;
    	categorySrvc.getSelectedCategoryProducts(stateParams.categoryName).then(function(response){
    		context.selectedCategoryProducts = response.data;
    	});
    }]);
})(angular.module("Timberland"));
(function(app) {
    'use strict';
    app.factory('productSrvc', ['utility', function(utility) {
        var methods = {
        	selectedProduct: function(stateParams){
                return utility.getData('/products/selected/' + stateParams.categoryName + '/' + stateParams.productId);
            }
        };
        return methods;
    }]);
})(angular.module("Meanapp"));
(function(app) {
    'use strict';
    app.factory('categorySrvc', ['$http', '$stateParams', 'utility', function(http, stateParams, utility) {
        var methods = {
        	getCategoryProducts: function(){
        		return utility.getData('/products/' + stateParams.categoryName);
        	},

        	getFilterProductCount: function(service, filter){
        		return utility.getData(service + queryString);
        	}
        };
        return methods;
    }]);
})(angular.module("Meanapp"));
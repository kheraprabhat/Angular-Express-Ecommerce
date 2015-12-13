(function(app) {
    'use strict';
    app.factory('categorySrvc', ['utility', function(utility) {
        var methods = {
        	products: function(stateParams){
        		return utility.getData('/products/' + stateParams.categoryName);
        	},

        	productLength: function(stateParams){
        		var queryString = utility.queryStingFormat({
                    categoryId: stateParams.categoryName,
                    fieldName: 'brand'
                });

                return utility.getData('/products/getProductCount' + queryString);
        	},

            productTypeLength: function(stateParams){
                var queryString = utility.queryStingFormat({
                    categoryId: stateParams.categoryName,
                    fieldName: 'type'
                });

                return utility.getData('/products/getProductCount' + queryString);
            },

            productRange: function(stateParams){
                var queryString = utility.queryStingFormat({
                    categoryId: stateParams.categoryName,
                    fieldName: 'price'
                });

                return utility.getData('/products/getProductRange' + queryString);
            },

            filteredProducts: function(stateParams){
                var queryString = utility.queryStingFormat({
                    categoryId: stateParams.categoryName,
                    filterKeyName: stateParams.filterKeyName,
                    filterKeyValue: stateParams.filterKeyValue
                });

                return utility.getData('/products/productFilter' + queryString);
            },

            productColors: function(stateParams){
                var queryString = utility.queryStingFormat({
                    categoryId: stateParams.categoryName,
                    filterKeyName: stateParams.filterKeyName,
                    filterKeyValue: stateParams.filterKeyValue,
                    filterType: 'color'
                });

                return utility.getData('/products/productFilterOptions' + queryString);
            },

            productSize: function(stateParams){
                var queryString = utility.queryStingFormat({
                    categoryId: stateParams.categoryName,
                    filterKeyName: stateParams.filterKeyName,
                    filterKeyValue: stateParams.filterKeyValue,
                    filterType: 'size'
                });

                return utility.getData('/products/productFilterOptions' + queryString);
            },

            innerFilter: function(stateParams, options){
                console.log(stateParams, options);
                return utility.getData('/products/productFilter/innerFilter');
            }
        };
        return methods;
    }]);
})(angular.module("Meanapp"));
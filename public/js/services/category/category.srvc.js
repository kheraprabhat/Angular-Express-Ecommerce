(function(app) {
    'use strict';
    app.factory('categorySrvc', ['$stateParams', '$location', 'utility', function($stateParams, location, utility) {
        var methods = {
        	products: function(stateParams){
        		return utility.getData('/products/' + stateParams.categoryName);
        	},

        	productLength: function(stateParams){
        		var queryString = utility.queryString({
                    categoryId: stateParams.categoryName,
                    fieldName: 'brand'
                });

                return utility.getData('/products/getProductCount' + queryString);
        	},

            productTypeLength: function(stateParams){
                var queryString = utility.queryString({
                    categoryId: stateParams.categoryName,
                    fieldName: 'type'
                });

                return utility.getData('/products/getProductCount' + queryString);
            },

            productRange: function(stateParams){
                var queryString = utility.queryString({
                    categoryId: stateParams.categoryName,
                    fieldName: 'price'
                });

                return utility.getData('/products/getProductRange' + queryString);
            },

            filteredProducts: function(stateParams){
                var queryString = utility.queryString({
                    categoryId: stateParams.categoryName,
                    filterKeyName: stateParams.filterKeyName,
                    filterKeyValue: stateParams.filterKeyValue
                });

                return utility.getData('/products/productFilter' + queryString);
            },

            productColors: function(stateParams){
                var queryString = utility.queryString({
                    categoryId: stateParams.categoryName,
                    filterKeyName: stateParams.filterKeyName,
                    filterKeyValue: stateParams.filterKeyValue,
                    filterType: 'color'
                });

                return utility.getData('/products/productFilterOptions' + queryString);
            },

            productSize: function(stateParams){
                var queryString = utility.queryString({
                    categoryId: stateParams.categoryName,
                    filterKeyName: stateParams.filterKeyName,
                    filterKeyValue: stateParams.filterKeyValue,
                    filterType: 'size'
                });

                return utility.getData('/products/productFilterOptions' + queryString);
            },

            applyInnerFilters: function(name, value){
                var search = location.search();
                if(!/subfilter/g.test(location.path())){
                    location.path(location.path() + '/subfilter');
                }

                if(name && value){
                    location.search(name, value);    
                }                

                var object = angular.extend($stateParams, search);
                var query = utility.queryString(object);

                return utility.getData('/products/subFilters' + query);
            },

            innerFilters: function(stateParams){
                //console.log(location.search());
                //var queryString = utility.queryString(angular.extend(stateParams, options));
                //return utility.getData('/products/productFilter/innerFilter' + queryString);
            }
        };
        return methods;
    }]);
})(angular.module("Meanapp"));
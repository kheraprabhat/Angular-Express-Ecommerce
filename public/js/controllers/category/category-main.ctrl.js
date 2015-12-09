(function(app) {
    'use strict';
    app.controller('CategoryMainCtrl', ['$stateParams', 'utility', 'categorySrvc', 'selectedCategoryProducts', 'getProductCount', 'getProductTypeCount', 'getProductRange',
        function(stateParams, utility, categorySrvc, selectedCategoryProducts, getProductCount, getProductTypeCount, getProductRange) {
            var vm = this;
            vm.categoryName = stateParams.categoryName;
            /* declear scope variable for view */
            vm.selectedCategoryProducts = [];
            vm.totalBrandsAvailableproducts = [];
            vm.totalProductTypeAvailableproducts = [];
            vm.getProductPriceRange = [];

            /* get all products for selected category */
            vm.selectedCategoryProducts = selectedCategoryProducts;

            /* get All Type Products Length */
            vm.totalBrandsAvailableproducts = getProductCount;

            /* get product type available count */
            vm.totalProductTypeAvailableproducts = getProductTypeCount;

            /* get product price range available [min to max] */
            vm.getProductPriceRange = getProductRange;
        }
    ]);
})(angular.module("Meanapp"));
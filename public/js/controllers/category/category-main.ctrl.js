(function(app) {
    'use strict';
    app.controller('CategoryMainCtrl', [
        '$stateParams',
        'utility',
        'categorySrvc',
        'products',
        'productLength',
        'productTypeLength',
        'productRange',
        function(
            stateParams,
            utility,
            categorySrvc,
            products,
            productLength,
            productTypeLength,
            productRange
        ) {
            var vm = this;
            vm.categoryName = stateParams.categoryName;
            /* declear scope variable for view */
            vm.selectedCategoryProducts = [];
            vm.totalBrandsAvailableproducts = [];
            vm.totalProductTypeAvailableproducts = [];
            vm.getProductPriceRange = [];

            /* get all products for selected category */
            vm.selectedCategoryProducts = products;

            /* get All Type Products Length */
            vm.totalBrandsAvailableproducts = productLength;

            /* get product type available count */
            vm.totalProductTypeAvailableproducts = productTypeLength;

            /* get product price range available [min to max] */
            vm.getProductPriceRange = productRange;
        }
    ]);
})(angular.module("Meanapp"));
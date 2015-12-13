(function(app) {
    'use strict';
    app.controller('CategoryProductFilterCtrl', [
        '$stateParams',
        'utility',
        'categorySrvc',
        'getFilteredProducts',
        'getFilteredProductsColor',
        'getFilteredProductsSize',
        function(
            stateParams,
            utility,
            categorySrvc,
            getFilteredProducts,
            getFilteredProductsColor,
            getFilteredProductsSize
        ) {
            var vm = this;
            vm.categoryName = stateParams.categoryName;
            vm.filterProducts = getFilteredProducts;
            vm.filterProductsColors = getFilteredProductsColor;
            vm.filterProductsSize = getFilteredProductsSize
        }
    ]);
})(angular.module("Meanapp"));
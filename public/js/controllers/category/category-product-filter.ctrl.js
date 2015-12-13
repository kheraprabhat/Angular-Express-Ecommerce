(function(app) {
    'use strict';
    app.controller('CategoryProductFilterCtrl', [
        '$stateParams',
        'utility',
        'categorySrvc',
        'filteredProducts',
        'productColors',
        'productSize',
        function(
            stateParams,
            utility,
            categorySrvc,
            filteredProducts,
            productColors,
            productSize
        ) {
            var vm = this;
            vm.categoryName = stateParams.categoryName;
            vm.filterProducts = filteredProducts;
            vm.filterProductsColors = productColors;
            vm.filterProductsSize = productSize

            vm.changedProductsSize = function(){
                categorySrvc.innerFilter(stateParams, {
                    name: 'size',
                    value: vm.selectedProductsSize
                });
            };
        }
    ]);
})(angular.module("Meanapp"));
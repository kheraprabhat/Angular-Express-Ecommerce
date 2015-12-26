(function(app) {
    'use strict';
    app.controller('CategoryMainCtrl', [
        '$rootScope',
        '$stateParams',
        'utility',
        'categorySrvc',
        'myAccountSrvc',
        'products',
        'productLength',
        'productTypeLength',
        'productRange',
        function(
            rootScope,
            stateParams,
            utility,
            categorySrvc,
            myAccountSrvc,
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

            vm.addToCart = function(productId){
                var object = {
                    productId: productId,
                    quantity: 1
                };

                utility.addToCart(object).then(function(data){
                    rootScope.cartItems = data;
                });
            };
        }
    ]);
})(angular.module("Meanapp"));